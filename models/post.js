const Sequelize = require('sequelize');
// const Post = require('../models/post');
// const Blog = require('../models/blog');
const db = require('../config/database');
const Post = db.define('post', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    blog_id:{
        type:Sequelize.INTEGER,
        references: {
            model: 'blogs',
            key: 'id',
         }
    },
    name: {
        type: Sequelize.STRING,
    },



});


module.exports = Post;


