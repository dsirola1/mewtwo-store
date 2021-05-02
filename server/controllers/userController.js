const db = require('../models/model.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password)
      return res.sendStatus(401);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const createUserText =
      'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
    const createUserVals = [firstname, lastname, email, hashedPassword];
    const data = await db.query(createUserText, createUserVals);

    console.log('data.rows[0] ---> ', data.rows[0]);
    res.locals.id = data.rows[0].id;
    res.locals.email = data.rows[0].email;
    res.locals.firstname = data.rows[0].firstname;
    res.locals.lastname = data.rows[0].lastname;
    return next();
  } catch (err) {
    console.log('usersController.addUser err ---> ', err);
    return next({
      log: 'usersController.addUser: ERROR: Error writing to database',
      message: {
        err: err.message,
      },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(401);

  try {
    const verifyUserText = ` SELECT * FROM users WHERE email = $1`;
    const verifyUserData = [email];

    const data = await db.query(verifyUserText, verifyUserData);

    if (data.rows.length === 0) {
      throw new Error('email does not exist!');
    }

    const hashedPassword = data.rows[0].password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      throw new Error('Password is incorrect!');
    }

    console.log('data.rows[0] ---> ', data.rows[0]);
    res.locals.id = data.rows[0].id;
    res.locals.email = data.rows[0].email;
    res.locals.firstname = data.rows[0].firstname;
    res.locals.lastname = data.rows[0].lastname;
    return next();
  } catch (err) {
    console.log('usersController.verifyUser err ---> ', err);
    return next({
      log: 'usersController.verifyUser: ERROR: Unable to verify user data.',
      status: 401,
      message: {
        err: err.message,
      },
    });
  }
};

module.exports = userController;
