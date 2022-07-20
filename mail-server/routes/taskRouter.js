const Router = require("express")
const router = new Router
const TaskController = require("../controllers/taskController")

router.post("/taskTimeRunningOut", TaskController.taskTimeRunningOut)                   //время задания на исходе

router.post("/taskGrade", TaskController.taskGrade)                                     //оценка задания

router.post("/newTaskCommentNotification", TaskController.newTaskCommentNotification)   //новый комментарий

module.exports = router