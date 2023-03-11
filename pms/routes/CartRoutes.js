const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');
router.post('/cart',cartController.addProductToCart)
router.get('/cart',cartController.getCartDetail)
router.delete('/cart/:cartid',cartController.removeProductFromCart)
router.get('/cart/:cartid',cartController.addProductFromCart)
module.exports = router;