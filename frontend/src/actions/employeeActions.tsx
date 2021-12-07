import {
  FETCH_EMPLOYEES,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_MODE,
  FETCH_EMPLOYEE_BY_ID,
  ADD_EMPLOYEE_BUTTON_CLICKED,
  DELETE_EMPLOYEE_ASYNC,
  EDIT_EMPLOYEE_ASYNC,
} from './actionTypes'
import { EmployeeTypes} from './EmployeeTypes'

export const fetchEmployees = () => ({
  type: FETCH_EMPLOYEES,
})

export const fetchEmployeeById = (id:String) => ({
  type: FETCH_EMPLOYEE_BY_ID,
  payload: id,
})


export const addEmployee = (employee: EmployeeTypes)=> ({
  type: ADD_EMPLOYEE,
  payload: employee,
})

export const editEmployee = (employee: EmployeeTypes) => ({
  type: EDIT_EMPLOYEE_ASYNC,
  payload: employee,
})

export const deleteEmployee = (id:String) => ({
  type: DELETE_EMPLOYEE_ASYNC,
  payload: id,
})

export const editMode = () =>
(
    {
        type:EDIT_MODE
    }
)

export const addEmployeeBtnClicked = () => ({
  type: ADD_EMPLOYEE_BUTTON_CLICKED,
})