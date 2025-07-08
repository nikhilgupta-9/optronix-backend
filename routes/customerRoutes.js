const express = require('express');
const CustomerController = require('../controllers/customerController');

const router = express.Router();

router.post('/register', CustomerController.registerCustomer);
router.get('/phone/:phone', CustomerController.getCustomerByPhone);

module.exports = router;