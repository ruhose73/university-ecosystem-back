const Router = require("express")
const router = new Router
const MaterialController = require("../controllers/materialController")

//  http://localhost:5000/ecosystem/material/getMaterialById/:id
router.get("/getMaterialById/:id", MaterialController.getMaterialById)

//  http://localhost:5000/ecosystem/material/getAllMaterialsFromUsers?courseId=1&userId=1
router.get("/getAllMaterialsFromUsers", MaterialController.getAllMaterialsFromUsers)

module.exports = router