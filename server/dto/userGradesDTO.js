module.exports = class AuthDto {
    course_name;
    task_name;
    grade;

    constructor(courses, tasks, grades) {
        this.course_name = courses.course_name;
        this.task_name = tasks.task_name;
        this.grade = grades.grade;
    }
};
