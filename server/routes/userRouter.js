const express = require('express')
const userlist = require('../Controllers/user/userlist.js');
const router = express.Router()

router.get('/',userlist)



module.exports = router