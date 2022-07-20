const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const UserMaterials = sequelize.define("UserMaterials", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    GroupId:{type:DataTypes.INTEGER},
    CourseId:{type:DataTypes.INTEGER},
    ModuleId:{type:DataTypes.INTEGER},
});

module.exports = UserMaterials;
