const express = require('express');
const router = express.Router();

let dailyPlans = {
    7: "Wake up",
    8: "Study",
    18: "Eat Dinner",
}
let newPlans = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
};

router.get('/', (req, res) => {
    res.render('planner', {dailyPlans, events: newPlans});
});

router.post('/', (req, res) => {
    const event = req.body.event;
    newPlans[event.date].push({
        start: event.start,
        end: event.end,
        name: event.name
    });
    res.redirect('/planner');
});

module.exports = router