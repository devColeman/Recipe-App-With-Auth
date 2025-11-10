const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)

router.get('/sign-UP', homeController.getSignIn)

router.post('/createTodo', homeController.createTodo)


module.exports = router