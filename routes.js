const express = require('express');
const getRandomList = require('./services/getList');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'pass "Hello world"'});
});

router.get('/list', (req, res, next) => {
    const size = 8;

    getRandomList(size, function (rows){
        
        res.render('list', {
            title: 'A sample list', 
            data: rows
        });
    });

});


module.exports = router;