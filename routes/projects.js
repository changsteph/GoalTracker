const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/project');

router.get('/', async (req, res) => {
    try{
        const projects = await Project.find({});
        res.render('projects/index', { projects });
    } catch{
        res.send('Oops Something Went Wrong');
    }
})

router.get('/new', (req, res) => {
    res.render('projects/new');
})

router.post('/new', async (req, res) => {
    // console.log(req.body);
    // res.send('New Project')
    try{
        const project = new Project(req.body.project);
        await project.save();
        res.redirect(`/projects/${project.id}`)
    } catch{
        res.send('Opps :(');
    }
})

router.get('/:id', async (req, res) => {
    res.send(req.params.id);
});

module.exports = router;