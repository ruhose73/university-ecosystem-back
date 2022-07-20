const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const TaskFiles = sequelize.define("TaskFiles", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

module.exports = TaskFiles;
