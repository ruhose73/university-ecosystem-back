const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const File = sequelize.define("File", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    path:{type:DataTypes.STRING, required:true},
});

module.exports = File;
