const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

router.get('/projects', projectsController.index);

module.exports = router;
