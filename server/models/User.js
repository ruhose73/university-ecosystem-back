const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const Image = require("./Image");
const Material = require("./Material");
const Task = require("./Task");
const UserMaterials = require("./UserMaterials");
const UserTasks = require("./UserTasks");

const User = sequelize.define("User", {
    id:{
        type:DataTypes.INTEGER,
        required:true,
        primaryKey:true,
        autoIncrement:true,
    },
    email:{type:DataTypes.STRING, required:true, unique:true},
    phone:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING, required:true},

    first_name:{type:DataTypes.STRING},
    middle_name:{type:DataTypes.STRING},
    last_name:{type:DataTypes.STRING},
    image_id:{
        type:DataTypes.INTEGER,
        required:true,
        references:{
            model:Image, // Users
            key:"id",
        },
    },
    role:{type:DataTypes.INTEGER, required:true, defaultValue:0},
    activationLink:{type:DataTypes.STRING, allowNull:true},
    isActivated:{type:DataTypes.BOOLEAN, default:0},
});

User.belongsToMany(Material, {through:UserMaterials});
Material.belongsToMany(User, {through:UserMaterials});

User.belongsToMany(Task, {through:UserTasks});
Task.belongsToMany(User, {through:UserTasks});

module.exports = User;
