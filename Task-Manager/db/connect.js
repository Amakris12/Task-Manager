const mongoose = require('mongoose')

const connectionString = "mongodb+srv://amakris03:Beartron12@project-task-manager.qwes4.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url)=>{
return mongoose
    .connect(connectionString)
    .then(()=>(console.log('CONNECTED TO MONGODB SUCCESSFUL')))
    .catch((err)=>(console.log(err)))
}

module.exports = connectDB
