const express = require('express')
const mongoose = require('mongoose')
const employeeRouter = require('./routes/employeeRoute')
const cors = require('cors')
const dotenv = require('dotenv')
const EmpSchema = require('./models/Employee')
dotenv.config()
// const database = require('./config/database')
const url = process.env.atlas_url
//connection link => mongodb+srv://hansurea:surafelmelese@employee.fifco.mongodb.net/Employee?retryWrites=true&w=majority

const app = express()
app.use(
  cors({
    origin: '*',
  })
)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('connected', function () {
  console.log('Connected successfully')
  // const employee = {
  //   name: 'Surafel Melese',
  //   salary: 20000,
  //   gender: 'Male',
  //   birthday: '03/03/2020',
  // }
  // new EmpSchema(employee).save()
})
app.use(employeeRouter)
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
