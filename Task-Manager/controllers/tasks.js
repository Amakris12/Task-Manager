const Task = require('../models/Task')
const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const updateTask = async(req, res) => {
    try{
        const {id} = req.params
        const newTask = req.body;
        console.log(req.body)
        const task = await Task.findOneAndUpdate({_id: id}, newTask)
        // console.log(newTask)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteTask = async (req, res) => {
    try{
        const tasks = await Task.deleteOne({})
        res.status(201).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const createTask = async (req, res) => {
    try{
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const singleTask = async (req, res) => {
    try{
        const {id} = req.params
        console.log(id)
        const task = await Task.findById(id).exec();
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks,
    updateTask,
    deleteTask,
    createTask,
    singleTask
}