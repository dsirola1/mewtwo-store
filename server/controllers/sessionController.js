const jwt = require('jsonwebtoken');
require('dotenv').config();

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  const { id } = res.locals;
  console.log('sessionController.startSession ---> id --->', id);
  try {
    // expiresIn: signing a token expiry time relative to the current time in seconds.
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60,
    });
    // maxAge: setting the cookie expiry time relative to the current time in milliseconds.
    res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    return next();
  } catch (err) {
    console.log('sessionController.startSession ---> ', err);
    return next({
      log: 'sessionController.startSession: ERROR: Unable to add JWT token',
      message: {
        err: err.message,
      },
    });
  }
};

sessionController.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;
  console.log('sessionController.isLoggedIn ---> token --->', token);
  //check if the token exists
  //if doesn't exist, redirect to signin in frontend
  try {
    if (!token) {
      throw new Error('session expires, please log in again');
    }
    //if token exists, verify the token
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(
      'sessionController.isLoggedIn ---> decodedToken--->',
      decodedToken
    );
    //save user id on res.locals
    res.locals.id = decodedToken.id;
    return next();
  } catch (err) {
    console.log('sessionController.isLoggedIn ---> ', err);
    return next({
      log: `sessionController.isLoggedIn: Unable to verify JWT token ERROR: ${err}`,
      status: 401,
      message: {
        err: err.message,
      },
    });
  }
};

module.exports = sessionController;
