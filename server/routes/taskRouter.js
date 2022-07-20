const Router = require("express")
const router = new Router
const TaskController = require("../controllers/taskController")

//  http://localhost:5000/ecosystem/task/getTaskById/:id
router.get("/getTaskById/:id", TaskController.getTaskById)

//  http://localhost:5000/ecosystem/task/getAllTasksFromUsers?courseId=1&userId=1
router.get("/getAllTasksFromUsers", TaskController.getAllTasksFromUsers)

//  http://localhost:5000/ecosystem/task/setGrade
router.post("/setGrade", TaskController.setGrade)

//  http://localhost:5000/ecosystem/task/taskDone
router.post("/taskDone", TaskController.taskDone)

//  http://localhost:5000/ecosystem/task/taskRemove
router.post("/taskRemove", TaskController.taskRemove)

module.exports = router