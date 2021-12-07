import React from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../../actions/employeeActions'
import { EmployeeTypes } from '../../actions/EmployeeTypes'
import {
  BoldLink,
  FormContainer,
  Input,
  MutedLink,
  BoxContainer,
  SubmitButton,
} from './formStyle'
type EmployeeEditState = {
  name: string
  birthDate: Date
  gender: string
  salary: number
}

type EmployeeEditProps = {
  employee: EmployeeTypes
  editEmployee: (employee: EmployeeTypes) => void
}

class EmployeeEdit extends React.Component<
  EmployeeEditProps,
  EmployeeEditState
> {
  constructor(props: EmployeeEditProps) {
    super(props)
    this.state = {
      name: '',
      birthDate: new Date(),
      gender: '',
      salary: 0,
    }
  }

  componentDidMount() {
    let employee = this.props.employee
    this.setState({
      name: employee.name,
      birthDate: employee.birthDate,
      gender: employee.gender,
      salary: +employee.salary,
    })
  }

  onSubmit = (e: any) => {
    e.preventDefault()
    const name = this.state.name
    const birthDate = this.state.birthDate
    const gender = this.state.gender
    const salary = this.state.salary

    const employee = {
      name,
      birthDate,
      gender,
      salary,
    }
    this.props.editEmployee(employee)
  }

  render() {
    return (
      <BoxContainer>
        <h3>Edit </h3>
        <FormContainer onSubmit={this.onSubmit} className='form'>
          <div className='form-group'>
            <label> Full Name </label>
            <Input
              required
              type='text'
              className='form-control'
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value })
              }}
            />
          </div>

          <div className='form-group'>
            <label> Date of birth </label>
            <Input
              required
              type='text'
              className='form-control'
              value={this.state.name}
              onChange={(e: any) => {
                this.setState({ birthDate: e.target.value })
              }}
            />
          </div>
          <div className='form-group'>
            <label> gender </label>
            <Input
              required
              type='text'
              className='form-control'
              value={this.state.gender}
              onChange={(e) => {
                this.setState({ gender: e.target.value })
              }}
            />
          </div>
          <div className='form-group'>
            <label> salary </label>
            <Input
              required
              type='text'
              className='form-control'
              value={this.state.salary}
              onChange={(e) => {
                this.setState({ salary: +e.target.value })
              }}
            />
          </div>

          <SubmitButton className='btn btn-primary'>Edit</SubmitButton>
        </FormContainer>
      </BoxContainer>
    )
  }
}

const mapStateToProps = (state: any) => ({
  employee: state.employeeReducer.employee,
})

export default connect(mapStateToProps, { editEmployee })(EmployeeEdit)
