const MessageController = require("../controllers/messageController");
const Router = require("express")
const router = new Router();

router.post("/addmsg/", MessageController.addMessage);
router.post("/getmsg/", MessageController.getMessages);

module.exports = router;