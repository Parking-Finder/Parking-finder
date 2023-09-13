const db = require('../models/models')
const bcrypt = require('bcrypt')


const userController = {
  //create a new user
  register: async (req, res, next) => {
    const { username, password } = req.body;
    
    //create a new user in the database
    try {
      //ensure that there isn't already a user with that username
      const checkExisting = await db.query({text: "SELECT username FROM users WHERE username = $1", values: [username]})

      if (checkExisting.rows[0]) {
        res.locals.result = 'User already exists'
        return next();
      }

      //has pasword here
      const hashedPassword = await bcrypt.hash(password, 5)
      console.log(hashedPassword);

      db.query({
      text: 'INSERT INTO users(username, password) VALUES($1, $2)',
      values: [username, hashedPassword]
    });
      res.locals.result = 'User created successfully'
      return next();
    }
    catch (err) {
      return next({
        log: 'Could not register user',
        status: 500,
        message: {err,}
      })
    }
  },

  login: async (req, res, next) => {
    //look for the submited username and check that the password matches

    const { username, password } = req.body;

    const query = {
      text: 'SELECT password FROM users WHERE username = $1',
      values: [username]
    }

    try {
      const dbPasword = await db.query(query);
      //determines if submited password matches the password in the database
      const isPasswordValid = await bcrypt.compare(password, dbPasword.rows[0].password)

      if (isPasswordValid) {
        res.locals.login = true;
      }
      else res.locals.login = false;
      return next()
    }
    catch (err) {
      return next({
        log: 'Could not login',
        status: 500,
        message: {err,}
      })
    }

  },

  //check if a user is logged in
  validate: async (req, res, next) => {


    //this code is just temporary for testing to see what's in the db
    try {
      const data = await db.query('SELECT * FROM users')
      res.locals.users = data.rows
      console.log(data.rows)
      return next();
    }
    catch (err) {
      return next({
        log: 'Could not find users',
        status: 500,
        message: {err,}
      })
    } 
  }
}


module.exports = userController;