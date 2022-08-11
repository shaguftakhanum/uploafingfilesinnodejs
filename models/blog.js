const Sequelize = require('sequelize');
const db = require('../config/database');
const Post =require('./post')
const Blog = db.define('blogs', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }  ,
    name: {
        type: Sequelize.STRING,
    }
});
// Blog.hasMany(Post);
module.exports = Blog;





