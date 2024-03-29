const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

const {
  createTask,
  readTasks,
  readTask,
  updateTask,
  deleteTask,
  readAllTasks,
} = require('../controllers/Task');
router.post('/tasks', auth, createTask);
router.get('/tasks', auth,  readTasks);
router.get('/alltasks', readAllTasks);
router.get('/tasks/:id', auth,  readTask);
router.patch('/tasks/:id', auth, updateTask);
router.delete('/tasks/:id', auth, deleteTask);


module.exports = router


// router.post('/tasks',
// // function(req,res,next){
// //   console.log(req.headers);

// // }, 
// auth, async (req, res) => {
//    // const task = new Task(req.body)
//    const task = new Task({
//        ...req.body,
//        owner: req.user._id
//    })

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.get('/tasks', auth, async (req, res) => {
//     try {
//         // const tasks = await Task.find({owner: req.user._id})
//         await req.user.populate('tasks')
//         res.send(req.user.tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/tasks/:id', auth, async (req, res) => {

//     const _id = req.params.id

//     try {
//         // const task = await Task.findById(_id)
//         const task = await Task.findOne({_id, owner: req.user._id})

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/tasks/:id', auth, async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['description','negotiable','Color','Price']
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//   if(!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid Updates!' })
//   }
//   try {
//     const task = await Task.findOne({_id: req.params.id, owner: req.user._id})
//     //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidatos: true})

//     if(!task) {
//       return res.status(404).send()
//     }
    
//     updates.forEach((update) => task[update] = req.body[update])
//     await task.save()

//     res.send(task)
//   }catch(e){
//      res.status(400).send(e)
//   }
// })

// router.delete('/tasks/:id', auth, async (req, res) => {
//   try {
//     console.log(req.user)
//     const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

//     if(!task) {
//       throw new Error("Cannot delete task")
//     }
//     res.status(200).send({status:"success"})
//   }catch(e){
//   res.status(500).send()
//   }
// })

