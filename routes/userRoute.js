const express = require('express')
const router = express.Router()
const userController = require('../controller/userController.js')

router.post('/create',userController.create)
router.get('/getall',userController.getdata)
router.get('/delete',userController.delete)
router.put('/update',userController.update)
 module.exports = router;