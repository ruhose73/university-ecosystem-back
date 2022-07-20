const Router = require("express")
const router = new Router
const GroupController = require("../controllers/groupController")

//  http://localhost:5000/ecosystem/group/getAllGroups
router.get("/getAllGroups", GroupController.getAllGroups)

//  http://localhost:5000/ecosystem/group/getGroupById/:id
router.get("/getGroupById/:id", GroupController.getGroupById)

//  http://localhost:5000/ecosystem/group/createGroup
router.post("/createGroup", GroupController.createGroup)

//  http://localhost:5000/ecosystem/group/addUserToGroup
router.post("/addUserToGroup", GroupController.addUserToGroup)

module.exports = router