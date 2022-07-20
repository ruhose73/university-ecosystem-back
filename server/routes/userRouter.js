const Router = require("express")
const router = new Router
const UserController = require("../controllers/userController")

//  http://localhost:5000/ecosystem/user/setFIO
router.post("/setFIO", UserController.setFIO)

module.exports = router