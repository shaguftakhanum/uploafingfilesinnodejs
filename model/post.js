const Sequelize = require('sequelize');
const db = require('../config/database');
const Post = db.define('post', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }  ,
    name: {
        type: Sequelize.STRING,
    },
    type:{
        type:Sequelize.INTEGER,
    },
    type_id:{
        type:Sequelize.INTEGER,
    }


});
module.exports = Post;


