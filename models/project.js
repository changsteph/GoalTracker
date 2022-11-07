const mongoose = require('mongoose')
const Task = require('./task');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    notes: [String]
})

module.exports = mongoose.model('Project', projectSchema)