const Sequelize = require('sequelize');
const db = require('../config/database');

const Blog = db.define('blogs', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }  ,
    name: {
        type: Sequelize.STRING,
    },


});

module.exports = Blog;





