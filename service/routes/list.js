const express = require('express');
const router = express.Router();
const db = require('../helper/db');

router.get('/', async (req, res, next) => {
    try {
        const homelist = await db('SELECT * FROM tour_banner');
        res.send({
            code: 0,
            data: homelist,
            message: ''
        });
    } catch (e) {
        res.json({
            code: -1, 
            data: [],
            message: e
        })
    }
});

module.exports = router;