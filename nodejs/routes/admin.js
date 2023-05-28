const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

router.get('/contact-us', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
})

router.post('/contact-us', (req, res, next) =>{
    res.redirect('/success');
})

router.get('/success', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'succes.html'));
})

module.exports = router;