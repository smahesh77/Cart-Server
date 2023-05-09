const router = require('express').Router();
const cartController = require('../controller/cartController')

//dedicated controllers
router.post('/api/add', cartController.add)
router.get('/api/get', cartController.get)
router.post('/api/put/:id', cartController.put)
router.post('/api/del/:id', cartController.del)

module.exports = router