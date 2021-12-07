import React from 'react'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'
import EmployeeEdit from './EmployeeEdit'
import { connect } from 'react-redux'
import { addEmployeeBtnClicked } from '../../actions/employeeActions'


type EmployeeState = {
  isSaveBtnClicked: boolean
}

type EmployeeProps = {
  isEditBtnClicked: boolean
  edit: boolean
  addEmployeeBtnClicked: () => void
}
class Employee extends React.Component<EmployeeProps, EmployeeState> {
  constructor(props: EmployeeProps) {
    super(props) 

    this.state = { 
      isSaveBtnClicked: false
    }

    this.onClick = this.onClick.bind(this)

    this.Add = this.Add.bind(this)
  }

  Add() {
    this.setState({ isSaveBtnClicked: false })
  }

  onClick() {
    const isSaveBtnClicked = true
    this.setState({ isSaveBtnClicked })
    this.props.addEmployeeBtnClicked()
  }
  render() {
    return (
      <div>
        {this.props.edit === true && (
          <h3 className='alert alert-success'>Data Edited Successfully</h3>
        )}

        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <button
              style={{color:'#00000', display:'flex',justifyContent: 'center' }}
              className='btn btn-primary'
              onClick={this.onClick}
            >
              Add Employee
            </button>
          )}
        <br />
        <br />
        {this.state.isSaveBtnClicked === true && (
          <EmployeeForm AddClicked={this.Add} />
        )}
        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <EmployeeList EditClicked={this.props.isEditBtnClicked} />
          )}
        {this.props.isEditBtnClicked && <EmployeeEdit />}
      </div>
    )
  }
}

const mapStateToProps = (state:any) => ({
  isEditBtnClicked: state.employeeReducer.isEditBtnClicked,
  edit: state.employeeReducer.edit,
})

export default connect(mapStateToProps, { addEmployeeBtnClicked })(Employee)
