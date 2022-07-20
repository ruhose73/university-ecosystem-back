const Router = require("express")
const router = new Router
const GroupController = require("../controllers/groupController")

router.post("/usersGrades", GroupController.usersGrades)   //оценки пользователей группы

module.exports = router