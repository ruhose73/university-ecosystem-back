const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')
const User = require('./User')
const Chat = require('./Chat')
 
const Message = sequelize.define('Message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},

    chat_id: {
        type:DataTypes.INTEGER,
        required:true,
        references:{
            model:Chat, // Chat
            key:"id",
        },
    },

    user_id: {
        type:DataTypes.INTEGER,
        required:true,
        references:{
            model:User, // User
            key:"id",
        },
    },

    author_id: {
        type:DataTypes.INTEGER,
        required:true,
        references:{
            model:User, // User
            key:"id",
        },
    },
    
    text : { type: DataTypes.STRING, required: true}

})

module.exports = Message;