const ApiStatus = require("../handlers/apiStatus");
const Task = require("../models/Task");
const UserTasks = require("../models/UserTasks")
const TaskGrades = require("../models/TasksGrades")

class TaskService {
    async getTaskById(taskId) {
        try {
            const task = await Task.findByPk(taskId);
            if(task) {
                return {task};
            } else {
                throw ApiStatus.badRequest("Задание не найдено");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async createTaskInCourse(taskName, taskDescription, courseId, groupId) {
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


    async addTaskToUsers(userId, taskId, groupId, courseId) {
        try {
            const addTaskToUsers = await UserTasks.create({
                GroupId:groupId,
                CourseId:courseId,
                UserId:userId,
                TaskId:taskId,
            });
            if(!addTaskToUsers) {
                throw ApiStatus.internal("Задание не создано");
            }
            return addTaskToUsers;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getAllTasksIdFromUsers(courseId, userId) {
        try {
            const getAllTasksIdFromUsers = await UserTasks.findAll({
                where:{
                    CourseId:courseId,
                    UserId:userId,
                }
            });
            if(!getAllTasksIdFromUsers) {
                throw ApiStatus.internal("Заданий нет");
            }
            return getAllTasksIdFromUsers;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async setGrade(taskId, userId, grade) {
        try{
            const task = await UserTasks.findOne({where:{UserId:userId, TaskId:taskId}});
            if(!task) {
                throw ApiStatus.internal("Задание не найдено");
            }
            task.grade = grade;
            task.status = 2;
            await task.save();
            return task;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async taskDone(taskId, userId) {
        try{
            const task = await UserTasks.findOne({where:{UserId:userId, TaskId:taskId}})
            if(!task) {
                throw ApiStatus.internal("Задание не найдено");
            }
            task.status = 1;
            await task.save();
            return task;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async taskRemove(taskId, userId) {
        try{
            const task = await UserTasks.findOne({where:{UserId:userId, TaskId:taskId}})
            if(!task) {
                throw ApiStatus.internal("Задание не найдено")
            }
            task.status = 0;
            await task.save();
            return task;
            
        } catch (e) {
            throw ApiStatus.internal(e)
        }
    }
}


module.exports = new TaskService();
