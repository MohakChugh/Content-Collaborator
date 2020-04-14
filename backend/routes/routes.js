const express = require('express');
const router = express.Router();
const cors = require('cors');
const authControllers = require('../authentication/controllers/authControllers')
const controllers = require('../controllers/controllers')

router.use(cors());

// Authentication routes
router.post('/login', authControllers.login)
router.post('/register', authControllers.register)
router.post('/validateToken', authControllers.validateToken)

// Blog Routes
router.post('/html', controllers.html)
router.get('/feed', controllers.feed)

module.exports = router;
