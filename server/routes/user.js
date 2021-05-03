const express = require('express');

const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController');

const userRouter = express.Router();

userRouter.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  (req, res) => {
    res.status(200).json({
      id: res.locals.id,
      email: res.locals.email,
      firstname: res.locals.firstname,
      lastname: res.locals.lastname,
    });
  }
);

userRouter.post(
  '/signin',
  userController.verifyUser,
  sessionController.startSession,
  (req, res) => {
    res.status(200).json({
      id: res.locals.id,
      email: res.locals.email,
      firstname: res.locals.firstname,
      lastname: res.locals.lastname,
    });
  }
);

userRouter.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(200);
});

module.exports = userRouter;
