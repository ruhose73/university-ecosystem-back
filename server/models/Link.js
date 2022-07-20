const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const Link = sequelize.define("Link", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    url:{type:DataTypes.STRING, required:true},
});

module.exports = Link;
