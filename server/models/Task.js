const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const File = require("./File");
const Link = require("./Link");
const TaskLinks = require("./TaskLinks");
const TaskFiles = require("./TaskFiles");

const Task = sequelize.define("Task", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    task_name:{type:DataTypes.STRING, required:true},
    task_description:{type:DataTypes.STRING}
});

//Task.hasMany(File)
//File.belongsTo(Task);

Task.belongsToMany(File, {through:TaskFiles});
File.belongsToMany(Task, {through:TaskFiles});

//Task.hasMany(Link)
//Link.belongsTo(Task);

Task.belongsToMany(Link, {through:TaskLinks});
Link.belongsToMany(Task, {through:TaskLinks});

module.exports = Task;
