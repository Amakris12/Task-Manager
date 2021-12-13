const express = require('express')
const router = express.Router();

const {getAllTasks,updateTask,deleteTask,createTask, singleTask} = require('../controllers/tasks')

// router.get('/',getThing)
// router.post('/',createThing)
// router.post('/postman',createThing)
// router.put('/',updateThing)
// router.delete('/:id',deleteThing)

// router.route('/').get((req,res)=>{
//     res.send('all items')
// }).post(updateTask)

// router.route('/').get(getAllTasks)
// router.route('/postman').post(createPostmanThing)
// router.route('/:id').get(updateThing).delete(deleteThing)

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteTask).get(singleTask)

module.exports = router;