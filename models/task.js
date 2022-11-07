const mongoose = require('mongoose');
const Project = require('./project');

const taskSchema = mongoose.Schema({
    // project: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Project'
    // },
    name: {
        type: String,
        required: true
    },
    description: String,
    deadline: String,
    subtasks: [String]
});

module.exports = mongoose.model('Task', taskSchema);