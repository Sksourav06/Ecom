const express = require('express')
const userlist = require('../Controllers/user/userlist')
const register = require('../Controllers/user/register')
const login = require('../Controllers/user/login')
const usersingle = require('../Controllers/user/usersingle')
const updateuser = require('../Controllers/user/updateuser')
const authenticateToken = require('../middlewares/verifytoken')

const router = express.Router()

router.get('/',userlist)
router.post('/register',register)
router.post('/login',login)
router.get('/:id',usersingle)
router.patch('/:id',authenticateToken,updateuser)


module.exports = router