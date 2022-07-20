const Router = require("express")
const router = new Router

const AuthRouter = require("./authRouter")
const CourseRouter = require("./courseRouter")
const GroupRouter = require("./groupRouter")
const UserRouter = require("./userRouter")
const MaterialRouter = require("./materialRouter")
const TaskRouter = require("./taskRouter")
const GradeRouter = require("./gradesRouter")

//  http://localhost:5000/ecosystem/auth
router.use("/auth", AuthRouter)

//  http://localhost:5000/ecosystem/course
router.use("/course", CourseRouter)

//  http://localhost:5000/ecosystem/group
router.use("/group", GroupRouter)

//  http://localhost:5000/ecosystem/user
router.use("/user", UserRouter)

//  http://localhost:5000/ecosystem/material
router.use("/material", MaterialRouter)

router.use("/task", TaskRouter)

router.use("/grades", GradeRouter)


module.exports = router