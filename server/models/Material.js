const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const File = require("./File");
const Link = require("./Link");
const MaterialLinks = require("./MaterialLinks");
const MaterialFiles = require("./MaterialFiles");

const Material = sequelize.define("Material", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    material_name:{type:DataTypes.STRING, required:true},
    material_description:{type:DataTypes.STRING},
});

//Material.hasMany(File)
//File.belongsTo(Material);

Material.belongsToMany(File, {through:MaterialFiles});
File.belongsToMany(Material, {through:MaterialFiles});

//Material.hasMany(Link)
//File.belongsTo(Material);

Material.belongsToMany(Link, {through:MaterialLinks});
Link.belongsToMany(Material, {through:MaterialLinks});

Material.belongsToMany(File, {through:MaterialFiles});
File.belongsToMany(Material, {through:MaterialFiles});

module.exports = Material;
