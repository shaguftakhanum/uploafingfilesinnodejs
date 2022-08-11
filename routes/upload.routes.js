const express = require('express');
const router = express.Router();

const ctrlUpload = require('../controllers/upload.controllers');

router.post('/uploads', ctrlUpload);

module.exports = router;