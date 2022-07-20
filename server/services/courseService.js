const Course = require("../models/Course");
const ApiStatus = require("../handlers/apiStatus");
const Group = require("../models/Group");
const CourseGroups = require("../models/CourseGroups");
const Material = require("../models/Material");
const Task = require("../models/Task");


class CourseService {
    async getAllCourses() {
        try {
            const courses = await Course.findAll();
            if(courses) {
                return courses;
            } else {
                throw ApiStatus.badRequest("Курсы не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseById(courseId) {
        try {
            const courses = await Course.findByPk(courseId);
            if(courses) {
                return courses;
            } else {
                throw ApiStatus.badRequest("Курсы не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async createCourse(courseName, courseDescription, authorId) {
        try {
            const candidateCourse = await Course.findOne({
                where:{course_name:courseName},
            });
            if(candidateCourse) {
                throw ApiStatus.badRequest("Курс с таким именем уже существует");
            }
            const createCourse = await Course.create({
                course_name:courseName,
                course_description:courseDescription,
                course_author:authorId,
            });
            if(!createCourse) {
                throw ApiStatus.internal("Курс не создан");
            }
            return {createCourse};
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async addGroupToCourse(courseId, groupId) {
        try {
            const candidateCourse = await Course.findByPk(courseId);
            if(!candidateCourse) {
                throw ApiStatus.badRequest("Курса не существует");
            }
            const candidateGroup = await Group.findByPk(groupId);
            if(!candidateGroup) {
                throw ApiStatus.badRequest("Группы не существует");
            }
            const addGroupToCourse = await CourseGroups.create({
                CourseId:courseId,
                GroupId:groupId,
            });
            console.log(addGroupToCourse);
            return {addGroupToCourse};
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseGroups(courseId) {
        try {
            const courseGroups = await CourseGroups.findAll({
                where:{CourseId:courseId},
            });
            if(courseGroups) {
                return {courseGroups};
            } else {
                throw ApiStatus.badRequest("Группы не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseMaterials(courseId) {
        try {
            const courseMaterials = await Material.findAll({
                where:{CourseId:courseId},
            });
            if(courseMaterials) {
                return {courseMaterials};
            } else {
                throw ApiStatus.badRequest("Материалы не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseGroupMaterials(courseId, groupId) {
        try {
            const courseGroupMaterials = await Material.findAll({
                where:{CourseId:courseId, GroupId:groupId},
            });
            if(courseGroupMaterials) {
                return {courseGroupMaterials};
            } else {
                throw ApiStatus.badRequest("Материалы не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseTasks(courseId) {
        try {
            const courseTasks = await Task.findAll({where:{CourseId:courseId}});
            if(courseTasks) {
                return {courseTasks};
            } else {
                throw ApiStatus.badRequest("Задания не найдены не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getCourseGroupTasks(courseId, groupId) {
        try {
            const courseGroupTasks = await Task.findAll({
                where:{CourseId:courseId, GroupId:groupId},
            });
            if(courseGroupTasks) {
                return {courseGroupTasks};
            } else {
                throw ApiStatus.badRequest("Задания не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}


module.exports = new CourseService();
