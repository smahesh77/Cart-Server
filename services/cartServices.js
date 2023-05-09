const cartModel = require('../models/cartModel');

class CartServices {
    static async addPro(pname, pprice, pdesc){
        const createCart = new cartModel({pname, pprice, pdesc})
        return await createCart.save();
    }
}
module.exports = CartServices