const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    enrollStatus: {
        type: String,
        enum: ['Open', 'Close', 'In Progress'],
        default: 'Open',
    },
    thumbnail: {
        type: String
    },
    duration: {
        type: String
    },
    schedule: {
        type: String
    },
    location: {
        type: String
    },
    preRequisites: {
        type: Array,
        default: ['Beginner Friendly'],
    },
    syllabus: [
        {
            week: Number,
            topic: String,
            content: String,
        }
    ],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
},
    {
        timestamps: true
    }
)

const courses = new mongoose.model('courses', courseSchema);

module.exports = courses;