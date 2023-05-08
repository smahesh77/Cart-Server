const router = require('express').Router();
const cartController = require('../controller/cartController')

router.post('/api/add', cartController.add)//dedicated controllers
router.get('/api/get', cartController.get)

module.exports = router