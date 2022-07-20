const TaskService = require("../services/taskService");
const ExternalMailService = require("../services/externalMailServise")
const UserService = require("../services/userService");

class TaskController {
    //  http://localhost:5000/ecosystem/task/getTaskById/:id
    async getTaskById(req, res, next) {
        try {
            const taskId = req.params.id;
            const task = await TaskService.getTaskById(taskId);
            return res.json(task);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/task/getAllTasksFromUsers?courseId=1&userId=1
    async getAllTasksFromUsers(req, res, next) {
        try {
            const courseId = req.query.courseId;
            const userId = req.query.userId;
            const tasks = await TaskService.getAllTasksIdFromUsers(
                courseId,
                userId
            );

            for(let i = 0; i < tasks.length; i++) {
                console.log(tasks[i])
                const foundedTasks = await TaskService.getTaskById(
                    tasks[i].TaskId
                );
                tasks[i].dataValues.task = foundedTasks;
            }
            return res.json({tasks})
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/task/setGrade
    async setGrade(req, res, next) {
        try{
            const {taskId, userId, grade} = req.body
            const userGrade = await TaskService.setGrade(taskId, userId, grade)

            const user = await UserService.getUserById(userId)
            const link = process.env.CLIENT_URL + "/course/" + courseId;
            await ExternalMailService.createCourse(user.email, link, grade)
            return res.json(userGrade)
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/task/taskDone
    async taskDone(req,res,next) {
        try {
            const {taskId, userId} = req.body
            const taskDone = await TaskService.taskDone(taskId, userId)
            return res.json(taskDone)
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/task/taskRemove
    async taskRemove(req, res, next) {
        try {
            const {taskId, userId} = req.body
            const taskRemove = await TaskService.taskRemove(taskId, userId)
            return res.json(taskRemove)
        } catch (e) {
            next(e)
        }
    }

}


module.exports = new TaskController();
