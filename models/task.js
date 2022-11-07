const mongoose = require('mongoose');
const Project = require('./project');

const subtaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

const taskSchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    deadline: String,
    subtasks: [subtaskSchema]
});

module.exports = mongoose.model('Task', taskSchema);