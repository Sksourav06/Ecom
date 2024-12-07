const express = require('express')
const userlist = require('../Controllers/user/userlist')
const register = require('../Controllers/user/register')
const login = require('../Controllers/user/login')
const usersingle = require('../Controllers/user/usersingle')
const updateuser = require('../Controllers/user/updateuser')
const authenticateToken = require('../middlewares/verifytoken')
const deleteuser = require('../Controllers/user/deleteuser')
const frontenduser = require('../Controllers/user/frontend/frontend_usersingle')
const frontendupdateuser = require('../Controllers/user/frontend/frontend_updateuser')


const router = express.Router()

router.get('/',userlist)
router.get('/userinfo',authenticateToken,frontenduser)
router.get('/:id',usersingle)
router.delete('/:id',deleteuser)
router.post('/register',register)
router.post('/login',login)
router.patch('/',authenticateToken,frontendupdateuser)
router.patch('/:id',authenticateToken,updateuser)


module.exports = router