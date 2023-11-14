/*
  Filename: index.js
  Student's Name: Abhijit Singh
  Student ID: 200533462
  Date: 12-10-2023
*/

require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session';
import passport from 'passport';
import bookRouter from './src/routes/crsroutes'
import authRouter from './src/routes/authRoutes'
const InitializeDB = require('./db')
InitializeDB(); //initialize the database

const app = express()
const PORT = process.env.PORT || 4000


// Use express-session middleware to manage sessions
app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
    })
  );
  
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req,res) => 
    res.send(`Node and express server is running on port ${PORT}`)
)

app.use('/auth', authRouter) //route for authentication
app.use('/book', bookRouter) //route to the book controller

try{
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    })
}catch(error) {
    console.log(error)
};
