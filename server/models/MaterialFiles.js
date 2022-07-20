const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const MaterialFiles = sequelize.define("MaterialFiles", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

module.exports = MaterialFiles;
