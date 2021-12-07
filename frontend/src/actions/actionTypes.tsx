import { EmployeeTypes } from './EmployeeTypes'
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const EDIT_MODE = "EDIT_MODE";
export const CLEAR_STATE = "CLEAR_STATE";
export const FETCH_EMPLOYEES_ASYNC = 'FETCH_EMPLOYEES_ASYNC'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const ADD_EMPLOYEE_ASYNC = 'ADD_EMPLOYEE_ASYNC'
export const FETCH_EMPLOYEE_BY_ID = 'FETCH_EMPLOYEE_BY_ID'
export const FETCH_EMPLOYEE_BY_ID_ASYNC = 'FETCH_EMPLOYEE_BY_ID_ASYNC'
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE'
export const EDIT_EMPLOYEE_ASYNC = 'EDIT_EMPLOYEE_ASYNC'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
export const DELETE_EMPLOYEE_ASYNC = 'DELETE_EMPLOYEE_ASYNC'
export const FETCH_EMPLOYEES_ASYNC_ERROR = 'FETCH_EMPLOYEES_ASYNC_ERROR'
export const EDITED = "EDITED";
export const ADD_EMPLOYEE_BUTTON_CLICKED = 'ADD_EMPLOYEE_BUTTON_CLICKED'

export interface FetchEmployees {
  type: typeof FETCH_EMPLOYEES
  employee: EmployeeTypes[]
}

export interface FetchEmployeesAsyncError {
  type: typeof FETCH_EMPLOYEES_ASYNC_ERROR
  employee: EmployeeTypes[]
}
export interface FetchEmployeesAsync {
  type: typeof FETCH_EMPLOYEES_ASYNC
  employee: EmployeeTypes[]
  payload: EmployeeTypes
}

export interface AddEmployees {
  type: typeof ADD_EMPLOYEE
  employees: EmployeeTypes
}

export interface AddEmployeesButtonClick {
  type: typeof ADD_EMPLOYEE_BUTTON_CLICKED
  employee: EmployeeTypes
}

export interface AddEmployeesAsync {
  type: typeof ADD_EMPLOYEE_ASYNC
  employee: EmployeeTypes
  payload: EmployeeTypes
}

export interface EditEmployee {
  type: typeof EDIT_EMPLOYEE
  employee: EmployeeTypes
}

export interface EditEmployeeAsync {
  type: typeof EDIT_EMPLOYEE_ASYNC
  employee: EmployeeTypes
  payload: EmployeeTypes
}
export interface fetchEmployeeById {
  type: typeof FETCH_EMPLOYEE_BY_ID
  id: String
  payload: EmployeeTypes
}

export interface RemoveEmployee {
  type: typeof DELETE_EMPLOYEE,
  id: String
}

export interface DeleteEmployeeAsync {
  type: typeof DELETE_EMPLOYEE_ASYNC
  id: String
  payload: EmployeeTypes
}

export interface Edited {
  type: typeof EDITED
  edit:boolean
}

export interface EditMode {
  type: typeof EDIT_MODE
  isEditBtnClicked: boolean
}

export type EmployeeActionType =
  | RemoveEmployee
  | EditEmployee
  | FetchEmployees
  | AddEmployees
  | FetchEmployeesAsync
  | FetchEmployeesAsyncError
  | AddEmployeesAsync
  | DeleteEmployeeAsync
  | fetchEmployeeById
  | EditEmployeeAsync
  | AddEmployeesButtonClick
  | EditMode
  | Edited

  export type AppAction = EmployeeActionType