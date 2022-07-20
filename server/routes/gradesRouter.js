const Router = require("express")
const router = new Router
const GradeController = require("../controllers/gradeController")

//  http://localhost:5000/ecosystem/grades/getUserGrades/:id
router.get("/getUserGrades/:id", GradeController.getUserGrades)


module.exports = router