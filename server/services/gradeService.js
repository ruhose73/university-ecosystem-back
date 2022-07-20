const ApiStatus = require("../handlers/apiStatus");
const Task = require("../models/Task");
const UserTasks = require("../models/UserTasks")

class GradeService {

    async getUserGrades(userId) {
        try {
            const task = await UserTasks.findByPk({where:{UserId:userId}})
            if(!task) {
                throw ApiStatus.badRequest("Оценки не найдены");
            }
            return task
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseUserGrades(taskName, taskDescription, courseId, groupId) {
        try {
            const createTaskInCourse = await Task.create({
                task_name:taskName,
                task_description:taskDescription,
                CourseId:courseId,
                GroupId:groupId,
            });
            if(!createTaskInCourse) {
                throw ApiStatus.internal("Задание не создано");
            }
            return createTaskInCourse;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}


module.exports = new GradeService();
