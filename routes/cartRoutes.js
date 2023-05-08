const router = require('express').Router();
const cartController = require('../controller/cartController')

router.post('/api/add', cartController.add)//dedicated controllers

module.exports = router