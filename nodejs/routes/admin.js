const path = require('path');

const express = require('express');

const contactsController = require('../controllers/contact');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

router.get('/contact-us', contactsController.getContact);

router.post('/contact-us', contactsController.postContact);

router.get('/success', contactsController.getSuccess);

module.exports = router;