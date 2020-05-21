const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'pass "Hello world"'});
});

router.get('/list', (req, res, next) => {
    res.render('list', {title: 'nothinf to see here yet'});
});


module.exports = router;