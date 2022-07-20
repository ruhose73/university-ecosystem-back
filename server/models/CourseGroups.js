const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const CourseGroups = sequelize.define("CourseGroups", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

module.exports = CourseGroups;
