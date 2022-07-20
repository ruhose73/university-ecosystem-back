const Router = require("express")
const router = new Router
const {body} = require("express-validator")
const CourseController = require("../controllers/courseControlles")

//  http://localhost:5000/ecosystem/course/getAllCourses
router.get("/getAllCourses", CourseController.getAllCourses)

//  http://localhost:5000/ecosystem/course/getCourseById/:id
router.get("/getCourseById/:id", CourseController.getCourseById)

//  http://localhost:5000/ecosystem/course/createCourse
router.post("/createCourse", CourseController.createCourse)

//  http://localhost:5000/ecosystem/course/addGroupToCourse
router.post("/addGroupToCourse", CourseController.addGroupToCourse)

//  http://localhost:5000/ecosystem/course/getCourseGroups/:id
router.get("/getCourseGroups/:id", CourseController.getCourseGroups)

//  http://localhost:5000/ecosystem/course/addMaterialToCourse
router.post("/addMaterialToCourse", CourseController.addMaterialToCourse)

//  http://localhost:5000/ecosystem/course/getCourseMaterials/:id
router.get("/getCourseMaterials/:id", CourseController.getCourseMaterials)

//  http://localhost:5000/ecosystem/course/addTaskToCourse
router.post("/addTaskToCourse", CourseController.addTaskToCourse)

//  http://localhost:5000/ecosystem/course/getCourseTasks/:id
router.get("/getCourseTasks/:id", CourseController.getCourseTasks)

//  http://localhost:5000/ecosystem/course/getCourseGroupMaterials?courseId=1&groupId=1
router.get("/getCourseGroupMaterials", CourseController.getCourseGroupMaterials)

//  http://localhost:5000/ecosystem/course/getCourseGroupTasks?courseId=1&groupId=1
router.get("/getCourseGroupTasks", CourseController.getCourseGroupTasks)

module.exports = router