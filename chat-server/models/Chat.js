const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')
const User = require("./User");
 
const Chat = sequelize.define('Chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},

    firstUserId: {
        type:DataTypes.INTEGER,
        required:true,
        references:{
            model:User, // User
            key:"id",
        },
    },
    
    secondUserId: {
        type:DataTypes.INTEGER,
        required:true,
        references:{
            model:User, // User
            key:"id",
        },
    },

    last_message: { type: DataTypes.STRING}

})

module.exports = Chat;