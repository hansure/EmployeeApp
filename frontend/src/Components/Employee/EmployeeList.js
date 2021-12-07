import React from 'react'
import { connect } from 'react-redux'
import {
  fetchEmployees,
  deleteEmployee,
  editMode,
  fetchEmployeeById,
} from '../../actions/employeeActions'
import './App.css'

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees()
  }

  onEdit = (employeeId) => {
    this.props.editMode()
    this.props.fetchEmployeeById(employeeId)
  }

  onDelete = (employeeId) => {
    this.props.deleteEmployee(employeeId)
  }

  render() {
    return (
      <div className='App'>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date of birth</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.birthDate}</td>
                <td>{emp.gender}</td>
                <td>{emp.salary}</td>

                <td>
                  <button onClick={() => this.onEdit(emp.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.onDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  Employees: state.employeeReducer.employees,
  error: state.employeeReducer.error,
})

export default connect(mapStateToProps, {
  fetchEmployees,
  deleteEmployee,
  editMode,
  fetchEmployeeById,
})(EmployeeList)
