const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const cors = require("cors");
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/students', require('./routes/studentRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started at port ${port}`))