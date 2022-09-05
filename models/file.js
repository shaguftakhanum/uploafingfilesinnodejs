const Sequelize = require('sequelize');
const db = require('../config/database');
const File = db.define('files', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }  ,
    name: {
        type: Sequelize.STRING,
    },


});
module.exports = File;


// (72) ReactJS - Uploading Files with Axios and FormData - YouTube
// www.youtube.com