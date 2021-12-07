var express = require('express')
var router = express.Router()

//Require controller modules
var employee_controller = require('../controllers/employeeController')

//Employee Routes
//Get request for creating an employee
router.get('/api/employee', employee_controller.empoyee_lists)

//Get request for one employee
router.get('/api/employee/:id', employee_controller.employee_detail)

//Post request for creating employee
router.post('/api/add-employee', employee_controller.employee_create)

//Post request to update employee
router.put('/api/edit-employee/:id', employee_controller.employee_update)

//Get request to delete employee
router.delete('/api/delete-employee/:id', employee_controller.employee_delete)

module.exports = router
