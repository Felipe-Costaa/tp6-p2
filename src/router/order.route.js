const express = require('express')
const router = express.Router()
const controller = require('../controller/order.controller')

router.post('/', controller.create)
router.delete('/:id', controller.remove)

module.exports = router