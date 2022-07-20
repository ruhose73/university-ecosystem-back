const TaskService = require("../services/taskService");
const ExternalMailService = require("../services/externalMailServise")
const CourseService = require("../services/courseService");
const GradeService = require("../services/gradeService");
const UserGradesDTO = require("../dto/userGradesDTO");

class GradeController {

    //  http://localhost:5000/ecosystem/grades/getUserGrades:id
    async getUserGrades(req, res, next) {
        try {
            const userId = req.params.id;
            //получаем смежную таблицу с данными всех заданий (курс, человек, группа, оценка, статус)
            const grades = await GradeService.getUserGrades(userId)
            //получаем задание и курс
            for(let i = 0; i < grades.length; i++) {
                const tasks = await TaskService.getTaskById(grades[i].TaskId);
                const courses = await CourseService.getCourseById(grades[i].CourseId)
                grades.dataValues.task = tasks[i].task_name
                grades.dataValues.course = courses[i].course_name
            }
            return res.json({grades})
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new GradeController();
