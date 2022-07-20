const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const UserTasks = sequelize.define("UserTasks", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    GroupId:{type:DataTypes.INTEGER},
    CourseId:{type:DataTypes.INTEGER},
    ModuleId:{type:DataTypes.INTEGER},
    grade:{type:DataTypes.INTEGER},
    status:{type:DataTypes.INTEGER, required:true, default:0} //0-не сделано 1-сдано 2-вернулось
});

module.exports = UserTasks;