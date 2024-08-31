const express = require('express')
const router = require('./src/routes/api')
const bodyParser = require('body-parser')
const  mongoose  = require('mongoose')


const app = express()
app.use(bodyParser.json())

// database connenction start

const userName = "mernpractice"
const password = "mernpractice"
const databaseName= "simpleCrud"
const options = {autoIndex: true}
const uri = `mongodb+srv://${userName}:${password}@cluster0.0uasavi.mongodb.net/${databaseName}?retryWrites=true&w=majority`

// `mongodb+srv://mernpractice:mernpractice@cluster0.0uasavi.mongodb.net/simpleCrud?retryWrites=true&w=majority`


mongoose.connect(uri, options)
.then(()=> console.log('db connected'))
.catch((err)=> console.log(err))


// database connenction end



app.use('/api/v1/', router)
app.use("*", (req, res) => {
    res.status(404).send("Not Found")
  });

  module.exports = app


    






