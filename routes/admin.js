const path = require('path');

const express = require('express');
const { body } = require('express-validator');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/add-product', isAuth, adminController.getAddProduct);

router.get('/products', isAuth, adminController.getProducts);

router.post(
  '/add-product',
  [
    body('title')
      .isString()
      .withMessage('Please enter a valid title')
      .isLength({ min: 3 })
      .trim()
      .withMessage('Title must be at least 3 characters long'),
    body('price').isFloat().withMessage('Please enter a valid price'),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
      .withMessage('Description must be between 5 and 400 characters long'),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .withMessage('Please enter a valid title')
      .isLength({ min: 3 })
      .trim()
      .withMessage('Title must be at least 3 characters long'),
    body('price').isFloat().withMessage('Please enter a valid price'),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
      .withMessage('Description must be between 5 and 400 characters long'),
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete('/product/:productId', isAuth, adminController.deleteProduct);

module.exports = router;
