const express = require('express')
const UsersController= require('../controller/UsersController')
const router = express.Router()


router.post('/create-user',UsersController.createUser) 
router.get('/read-user',UsersController.readUser)
router.post('/update-user/:id',UsersController.updateUser)
router.get('/delete-user/:id',UsersController.deleteUser)

module.exports = router






