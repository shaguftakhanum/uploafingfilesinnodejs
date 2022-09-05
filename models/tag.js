const Sequelize = require('sequelize');
const db = require('../config/database');
const Tag = db.define('tags', {
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
        // references: {
        //     model: 'files',
        //     key: 'id',
        //  }
        }


});
module.exports = Tag;


