require('./db/connect')
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const tasks = require('./routes/task')
// const {connect } = require('./routes/task')
require('dotenv').config

//middleware
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(express.static('public'))

// app.use(express.static('public'))
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// })
const port = 3000;
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port} `))
    }catch(error){
        console.log(error)
    }
}
start()
