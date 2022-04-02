const asyncHandler = require('express-async-handler')

const Student = require('../models/student')

const getStudents = asyncHandler( async (req,res) => {
    const students = await Student.find()
    res.status(200).json({students})
})

const setStudent = asyncHandler( async (req,res) => {
    const student = await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        grade: req.body.grade
    })
    if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.age || !req.body.grade){
        res.status(400)
        throw new Error('Please fill all fields')
    }
    res.status(200).json({student})
})

const updateStudent = asyncHandler( async (req, res) => {
    const student = await Student.findById(req.params.id)
    if(!student){
        res.status(400)
        throw new Error('Student not found')
    }
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedStudent)
})

const deleteStudent = asyncHandler( async (req, res) => {
    const student = await Student.findById(req.params.id)
    if(!student){
        res.status(400)
        throw new Error('Student not found')
    }
    await student.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getStudents,
    setStudent,
    updateStudent,
    deleteStudent
}