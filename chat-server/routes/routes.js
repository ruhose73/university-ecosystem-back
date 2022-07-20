const Router = require("express")
const router = new Router

const UserRouter = require("./user")
const ChatRouter = require("./chat")
const MessageRouter = require("./messages")

router.use("/user", UserRouter)

router.use("/chat", ChatRouter)

router.use("/message", MessageRouter)



module.exports = router