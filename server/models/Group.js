const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User");
const Material = require("./Material");
const Task = require("./Task");

const Group = sequelize.define("Group", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    group_name:{type:DataTypes.STRING, required:true, unique:true},
    group_type:{type:DataTypes.INTEGER, required:true, defaultValue:0},
});

Group.hasMany(User);
User.belongsTo(Group);

Group.hasMany(Material);
Material.belongsTo(Group);

Group.hasMany(Task);
Task.belongsTo(Group);

module.exports = Group;
