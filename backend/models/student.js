const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
{
    firstName: {
        type: String,
        required: [true, 'Please add a firstName value']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a lastName value']
    },
    email: {
        type: String,
        required: [true, 'Please add a email value']
    },
    age: {
        type: String,
        required: [true, 'Please add a age value']
    },
    grade: {
        type: String,
        required: [true, 'Please add a grade value']
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Student', studentSchema)