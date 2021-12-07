const Employee = require('../models/Employee')

//get all employee data from db
exports.empoyee_lists = function (req, res) {
  // use mongoose to get all todos in the database
  Employee.find(function (err, employees) {
    // if there is an error retrieving, send the error otherwise send data
    if (err) res.send(err)
    res.json(employees) // return all employees in JSON format
  })
}
// get a employee with ID of 1
exports.employee_detail = function (req, res) {
  let id = req.params.id
  Employee.findById(id, function (err, employee) {
    if (err) res.send(err)

    res.json(employee)
  })
}

// create employee and send back all employees after creation
exports.employee_create = function (req, res) {
  // create mongose method to create a new record into collection
  Employee.create(
    {
      name: req.body.name,
      salary: req.body.salary,
      gender: req.body.gender,
      birthday: new Date(req.body.birthdate),
    },
    function (err, employee) {
      if (err) res.send(err)

      // get and return all the employees after newly created employe record
      Employee.find(function (err, employees) {
        if (err) res.send(err)
        res.json(employees)
      })
    }
  )
}

// create employee and send back all employees after creation
exports.employee_update = function (req, res) {
  // create mongose method to update a existing record into collection
  let id = req.params.id
  var data = {
    name: req.body.name,
    salary: req.body.salary,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
  }

  // save the Employee
  Employee.findByIdAndUpdate(id, data, function (err, employee) {
    if (err) throw err

    res.send('Successfully! Employee updated - ' + employee.name)
  })
}

exports.employee_delete = function (req, res) {
  console.log(req.params.id)
  let id = req.params.id
  Employee.remove(
    {
      _id: id,
    },
    function (err) {
      if (err) res.send(err)
      else res.send('Successfully! Employee has been Deleted.')
    }
  )
}
