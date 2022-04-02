import axios from 'axios'
const BASE_URL = `http://127.0.0.1:5000/api/students`



const getStudents = async () => {
    const response  = await axios.get(BASE_URL)
    return response.data.students
}

const createStudent = async (student) => {
    const response  = await axios.post(BASE_URL, student)
    return response.data
}

const updateStudent = async (id,student) => {
    const response  = await axios.put(`${BASE_URL}/${id}`, student)
    return response.data
}

const deleteStudent = async (id) => {
    const response  = await axios.delete(`${BASE_URL}/${id}`)
    return response.data
}

const studentsService = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
}

export default studentsService