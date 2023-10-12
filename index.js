/*
  Filename: index.js
  Student's Name: Abhijit Singh
  Student ID: 200533462
  Date: 12-10-2023
*/

import express from 'express'
import bodyParser from 'body-parser'
import router from './src/routes/crsroutes'
const InitializeDB = require('./db')
InitializeDB(); //initialize the database

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req,res) => 
    res.send(`Node and express server is running on port ${PORT}`)
)


app.use('/book', router) //route to the book controller

try{
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    })
}catch(error) {
    console.log(error)
};
