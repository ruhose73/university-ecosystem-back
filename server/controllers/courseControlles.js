const CourseService = require("../services/courseService");
const MaterialService = require("../services/materialService");
const TaskService = require("../services/taskService");
const UserService = require("../services/userService");
const ExternalMailService = require("../services/externalMailServise")
class CourseController {
    //  http://localhost:5000/ecosystem/course/getAllCourses
    async getAllCourses(req, res, next) {
        try {
            const courses = await CourseService.getAllCourses();
            //console.log(courses[0]);
            for(let i = 0; i < courses.length; i++) {
                const founded = await UserService.getUsernameById(
                    courses[i].course_author
                );
                courses[i].dataValues.author_name =
                    founded.usernameDTO.first_name + " " + founded.usernameDTO.last_name;
            }
            return res.json({courses});
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/getCourseById/:id
    async getCourseById(req, res, next) {
        try {
            const courseId = req.params.id;
            const course = await CourseService.getCourseById(courseId);
            const lecturer = await UserService.getUsernameById(course.course_author);
            course.dataValues.author_name =
                lecturer.usernameDTO.first_name + " " + lecturer.usernameDTO.last_name;
            return res.json({course});
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/createCourse
    async createCourse(req, res, next) {
        try {
            const {courseName, courseDescription, authorId} = req.body;
            const createCourse = await CourseService.createCourse(
                courseName,
                courseDescription,
                authorId
            );
            return res.json(createCourse);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/addGroupToCourse
    async addGroupToCourse(req, res, next) {
        try {
            const {courseId, groupId} = req.body;
            const addGroupToCourse = await CourseService.addGroupToCourse(
                courseId,
                groupId
            );
            const title = await CourseService.getCourseById(courseId)

            const users = await UserService.getUsersFromGroup(groupId)
            
            const link = process.env.CLIENT_URL + "/course/" + courseId;
            for(let i = 0; i < users.length; i++) {
                await ExternalMailService.createCourse(users[i].email, link, title.course_name)
            }
            return res.json(addGroupToCourse);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/getCourseGroups/:id
    async getCourseGroups(req, res, next) {
        try {
            const courseId = req.params.id;
            const courseGroups = await CourseService.getCourseGroups(courseId);
            return res.json(courseGroups);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/addMaterialToCourse
    async addMaterialToCourse(req, res, next) {
        try {
            const {courseId, materialName, materialDescription, groupId} = req.body;
            const addMaterial = await MaterialService.createMaterialInCourse(
                materialName,
                materialDescription,
                courseId,
                groupId
            );
            const users = await UserService.getUsersFromGroup(groupId);
            const materialId = addMaterial.id;
            for(let i = 0; i < users.length; i++) {
                const addMaterialToCourse = await MaterialService.addMaterialToUsers(
                    users[i].id,
                    materialId,
                    groupId,
                    courseId
                );
            }
            
            const link = process.env.CLIENT_URL + "/course/" + courseId;
            for(let i = 0; i < users.length; i++) {
                await ExternalMailService.newMaterialCourse(users[i].email, link, materialName)
            }
            return res.json({addMaterial});
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/getCourseMaterials/:id
    async getCourseMaterials(req, res, next) {
        try {
            const courseId = req.params.id;
            const courseMaterials = await CourseService.getCourseMaterials(courseId);
            return res.json(courseMaterials);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/addTaskToCourse
    async addTaskToCourse(req, res, next) {
        try {
            const {courseId, taskName, taskDescription, groupId} = req.body;
            const addTask = await TaskService.createTaskInCourse(
                taskName,
                taskDescription,
                courseId,
                groupId
            );
            const users = await UserService.getUsersFromGroup(groupId);
            const taskId = addTask.id;
            for(let i = 0; i < users.length; i++) {
                const addTaskToCourse = await TaskService.addTaskToUsers(
                    users[i].id,
                    taskId,
                    groupId,
                    courseId
                );
            }
            const link = process.env.CLIENT_URL + "/course/" + courseId;
            for(let i = 0; i < users.length; i++) {
                await ExternalMailService.newTaskCourse(users[i].email, link, taskName)
            }
            return res.json(addTask);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/getCourseTasks/:id
    async getCourseTasks(req, res, next) {
        try {
            const courseId = req.params.id;
            const courseTasks = await CourseService.getCourseTasks(courseId);
            return res.json(courseTasks);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/getCourseGroupMaterials?courseId=1&groupId=1
    async getCourseGroupMaterials(req, res, next) {
        try {
            const courseId = req.query.courseId;
            const groupId = req.query.groupId;
            const courseGroupMaterials = await CourseService.getCourseGroupMaterials(
                courseId,
                groupId
            );
            return res.json(courseGroupMaterials);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/course/getCourseGroupTasks?courseId=1&groupId=1
    async getCourseGroupTasks(req, res, next) {
        try {
            const courseId = req.query.courseId;
            const groupId = req.query.groupId;
            const courseGroupTasks = await CourseService.getCourseGroupTasks(
                courseId,
                groupId
            );
            return res.json(courseGroupTasks);
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new CourseController();
