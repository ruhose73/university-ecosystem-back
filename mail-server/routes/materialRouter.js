const Router = require("express")
const router = new Router
const MaterialController = require("../controllers/materialController")

router.post("/materialTimeRunningOut", MaterialController.materialTimeRunningOut)           //время задания на исходе

router.post("/newMaterialCommentNotification", MaterialController.newCommentNotification)   //новый комментарий

module.exports = router