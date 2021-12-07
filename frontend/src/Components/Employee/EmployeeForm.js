import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../../actions/employeeActions'
import 'bootstrap/dist/css/bootstrap.css'
import {
  BoldLink,
  FormContainer,
  Input,
  MutedLink,
  BoxContainer,
  SubmitButton,
} from './formStyle'

// interface EmployeeFormState = {

// }
// interface EmployeeFormProps = {
//   addEmployee: () => void
// }

class EmployeeForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    const name = this.getFullName.value
    const birthDate = this.getDateOfBirth.value
    const gender = this.getgender.value
    const salary = this.getsalary.value

    const employee = {
      name: name,
      birthDate: birthDate,
      gender: gender,
      salary: salary,
    }

    this.props.addEmployee(employee)
    this.props.AddClicked()
  }

  render() {
    return (
      <BoxContainer>
        <h3 style={{ display: 'flex', justifyContent: 'center' }}>
          Add Employee
        </h3>
        <br />
        <div className='container'>
          <FormContainer onSubmit={this.onSubmit} className='form'>
            <div className='form-group'>
              <label>
                <b>Full Name</b>
              </label>
              <br />
              <Input
                required
                className='form-control-sm'
                id='fullName'
                type='text'
                ref={(Input) => (this.getFullName = Input)}
              />
            </div>
            <div className='form-group'>
              <label>
                <b>Date of birth</b>
              </label>
              <br />
              <Input
                required
                className='form-control-sm'
                id='dob'
                type='text'
                ref={(Input) => (this.getDateOfBirth = Input)}
              />
            </div>
            <div className='form-group'>
              <label>
                <b>Gender</b>
              </label>
              <br />
              <Input
                required
                className='form-control-sm'
                id='gender'
                type='text'
                ref={(Input) => (this.getgender = Input)}
              />
            </div>
            <div className='form-group'>
              <label>
                <b>Salary</b>
              </label>
              <br />
              <Input
                required
                className='form-control-sm'
                id='salary'
                type='text'
                ref={(Input) => (this.getsalary = Input)}
              />
            </div>
            <SubmitButton className='btn btn-primary'>
              Add Employee
            </SubmitButton>
          </FormContainer>
        </div>
      </BoxContainer>
    )
  }
}

export default connect(null, { addEmployee })(EmployeeForm)
