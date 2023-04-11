const mongoose = require('mongoose')

const checklistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tasksId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks',
    }]
})

module.exports = mongoose.model('Checklists', checklistSchema)