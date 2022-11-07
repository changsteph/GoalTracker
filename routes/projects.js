const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/project');
const Task = require('../models/task');

router.get('/', async (req, res) => {
    try{
        const projects = await Project.find({});
        res.render('projects/index', { projects });
    } catch{
        res.send('Oops Something Went Wrong');
    }
})

router.route('/new')
    .get((req, res) => {
        res.render('projects/new');
    })
    .post(async (req, res) => {
        try{
            const project = new Project(req.body.project);
            project.tasks = [];
            project.notes = [];
            await project.save();
            res.redirect(`/projects/${project.id}`)
        } catch{
            res.send('Opps :(');
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try{
            const project = await Project.findById(req.params.id).populate('tasks');
            res.render('projects/show', { project });
        } catch{
            res.send(req.params.id);
        }
    })
    .post(async (req, res) => {
        try{
            const task = new Task(req.body.task);
            task.subtasks = [];
            const project = await Project.findById(req.params.id);
            project.tasks.push(task);
            await task.save();
            await project.save();
            res.redirect(`/projects/${project._id}/tasks/${task._id}`)
        } catch{
            res.redirect(`/projects/${req.params.id}`);
        }
    });

router.route('/:id/tasks/:taskId')
    .get(async (req, res) => {
        try{
            const {id} = req.params;
            const task = await Task.findById(req.params.taskId);
            res.render('projects/task', { task , id});
        }catch{
            res.redirect(`/projects/${req.params.id}`);
        }
    })
    .post(async (req, res) => {
        try{
            const task = await Task.findById(req.params.taskId);
            task.subtasks.push(req.body.subtask);
            await task.save();
            res.redirect(`/projects/${req.params.id}/tasks/${task._id}`);
        }catch{
            res.redirect(`/projects/${req.params.id}`);
        }
    })

module.exports = router;