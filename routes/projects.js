const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('projects/index')
})

router.get('/new', (req, res) => {
    res.render('projects/new')
})

router.post('/new', (req, res) => {
    res.send('New Project')
})

module.exports = router