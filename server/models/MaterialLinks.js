const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const MaterialLinks = sequelize.define("MaterialLinks", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

module.exports = MaterialLinks;
