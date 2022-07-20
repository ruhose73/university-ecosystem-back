const ChatContoller = require("../controllers/chatContoller");
const Router = require("express")
const router = new Router();
  
router.get("/chats", ChatContoller.getAllChats);

router.post("/createChat", ChatContoller.createChat);

module.exports = router;