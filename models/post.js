const Sequelize = require('sequelize');
const db = require('../config/database');
const Post = db.define('posts', {
    blog_id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type: Sequelize.STRING,
    },


});
module.exports = Post;


