const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController")
const taskController = require('../controllers/taskController');
const userController = require('../controllers/userController');
const { authenticate, authorize } = require('../authMiddleware');


router.post('/register', authController.register);
router.post('/login', authController.login); 

router.get('/tasks', authenticate, taskController.getTasks);
router.post('/tasks', authenticate, taskController.createTask);
router.put('/tasks/:id', authenticate,authorize, taskController.updateTask);
router.delete('/tasks/:id', authenticate,authorize, taskController.deleteTask);

router.get('/profile', authenticate, userController.getUserProfile);
router.put('/profile', authenticate, authorize ,userController.updateUserProfile);

module.exports = router