const express = require('express');

const userController = require('../controllers/userController.js');

const userRouter = express.Router();

userRouter.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json({
    id: res.locals.id,
    email: res.locals.email,
    firstname: res.locals.firstname,
    lastname: res.locals.lastname,
  });
});

userRouter.post('/signin', userController.verifyUser, (req, res) => {
  res.status(200).json({
    id: res.locals.id,
    email: res.locals.email,
    firstname: res.locals.firstname,
    lastname: res.locals.lastname,
  });
});

module.exports = userRouter;
