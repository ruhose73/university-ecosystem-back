const Router = require("express")
const router = new Router
const MessageController = require("../controllers/messageController")

router.post("/newMessageNotification", MessageController.newMessageNotification)    //новое сообщение (уведомление)

module.exports = router