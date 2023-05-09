const router = require('express').Router();
const cartController = require('../controller/cartController')

//mongodb+srv://smahesh7736:s0MrbhDu0XdUdAyx@cluster0.p9vxhp1.mongodb.net/cartDb?retryWrites=true&w=majority

//dedicated controllers
router.post('/api/add', cartController.add)
// router.get('/api/get', cartController.get)
// router.post('/api/put/:id', cartController.put)
// router.post('/api/del/:id', cartController.del)

module.exports = router