const router = require('express').Router();
const cartController = require('../controller/cartController')

//dedicated controllers
router.post('/api/add', cartController.add)
router.get('/api/get', cartController.get)
router.put('/api/put/:id', cartController.put)

module.exports = router