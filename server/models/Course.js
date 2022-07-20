const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const CourseGroups = require("./CourseGroups");
const Group = require("./Group");
const Module = require("./Module");
const Material = require("./Material");
const Task = require("./Task");

const Course = sequelize.define("Course", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    course_name:{type:DataTypes.STRING, unique:true, required:true},
    course_description:{type:DataTypes.STRING},
    course_author:{type:DataTypes.STRING, required:true},
});

Course.belongsToMany(Group, {through:CourseGroups});
Group.belongsToMany(Course, {through:CourseGroups});

Course.hasMany(Module);
Module.belongsTo(Course);

Course.hasMany(Material);
Material.belongsTo(Course);

Course.hasMany(Task);
Task.belongsTo(Course);

module.exports = Course;
