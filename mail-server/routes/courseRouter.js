const Router = require("express")
const router = new Router
const CourseController = require("../controllers/courseController")

router.post("/newCourse", CourseController.newCourseNotification)               //Вы добавлены в курс
router.post("/newMaterial", CourseController.newMaterialNotification)           //В курсе появился новый материал
router.post("/newTask", CourseController.newTaskNotification)                   //В курсе появилось новое задание

module.exports = router