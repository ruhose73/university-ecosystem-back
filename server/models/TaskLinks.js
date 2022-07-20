const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const TaskLinks = sequelize.define("TaskLinks", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

module.exports = TaskLinks;
