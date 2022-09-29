const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('planner');
});

router.post('/', (req, res) => {
    res.send("hi")
});

module.exports = router