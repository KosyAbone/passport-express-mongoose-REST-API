import express from 'express'
import bodyParser from 'body-parser'
import router from './src/routes/crsroutes'
const InitializeDB = require('./db')
InitializeDB();

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req,res) => 
    res.send(`Node and express server is running on port ${PORT}`)
)


app.use('/book', router)

try{
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    })
}catch(error) {
    console.log(error)
};
