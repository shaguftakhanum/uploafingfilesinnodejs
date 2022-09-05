const Sequelize = require('sequelize');
const db = require('../config/database');
const Post = db.define('posts', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type: Sequelize.STRING,
    },
    type:{
        type:Sequelize.INTEGER,
    },

    type_id:{
        type:Sequelize.INTEGER,
         references: {
            model: 'blogs',
            key: 'id',
         }
    },

});
module.exports = Post;


