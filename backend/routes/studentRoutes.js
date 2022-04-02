const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const {getStudents, setStudent, updateStudent, deleteStudent} = require('../controllers/studentsController')

router.route('/').get(getStudents).post(setStudent)
router.route('/:id').put(updateStudent).delete(deleteStudent)

module.exports = router