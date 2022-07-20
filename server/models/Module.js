const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const Material = require("./Material");
const Task = require("./Task");

const Module = sequelize.define("Module", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    module_title:{type:DataTypes.STRING, required:true},
    module_description:{type:DataTypes.STRING},
});

Module.hasMany(Material);
Material.belongsTo(Module);
Module.hasMany(Task);
Task.belongsTo(Module);

module.exports = Module;
