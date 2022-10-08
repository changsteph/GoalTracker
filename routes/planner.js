const express = require('express');
const router = express.Router();

let plans = {
    7: "Wake up",
    8: "Study",
    18: "Eat Dinner",
}

router.get('/', (req, res) => {
    res.render('planner', {plans: plans});
});

router.post('/', (req, res) => {
    res.send("hi")
});

module.exports = router