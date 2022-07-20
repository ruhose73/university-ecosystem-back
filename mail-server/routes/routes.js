const Router = require("express")
const router = new Router

const CourseRouter = require("./courseRouter")
const GroupRouter = require("./groupRouter")
const MaterialRouter = require("./materialRouter")
const MessageRouter = require("./messageRouter")
const TaskRouter = require("./taskRouter")

router.use("/course", CourseRouter)

router.use("/group", GroupRouter)

router.use("/material", MaterialRouter)

router.use("/message", MessageRouter)

router.use("/task", TaskRouter)


module.exports = router