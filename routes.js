const express = require('express');
const getRandomList = require('./services/getList');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', {title: 'pass "Hello world"'});
});

router.get('/list', (req, res, next) => {
    res.render('list', {
        title: 'A sample list', 
        data: getRandomList(5)
    });
});


module.exports = router;