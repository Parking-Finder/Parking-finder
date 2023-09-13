const express = require('express')
const userController = require('../controllers/UserController')

module.exports = (app) => {

  //the route for creating a user
  app.post('/register', userController.register, (req, res) => {
    return res.status(200).json(res.locals.result)
  }) 

  //route to login
  app.post('/login', userController.login, (req, res) => {
    return res.status(200).json(res.locals.login)
  })
  

  //route for validating that a user is log
  app.post('/validate', userController.validate, (req, res) => {
    return res.status(200).send(res.locals.users);
  })

  //route for logging out
  app.post('/logout', (req, res) => {

  })

}