import {
  FETCH_EMPLOYEES_ASYNC,
  EDIT_MODE,
  FETCH_EMPLOYEE_BY_ID,
  CLEAR_STATE,
  ADD_EMPLOYEE_ASYNC,
  EDIT_EMPLOYEE_ASYNC,
  DELETE_EMPLOYEE_ASYNC,
  FETCH_EMPLOYEES_ASYNC_ERROR,
  EDITED,
  ADD_EMPLOYEE_BUTTON_CLICKED,
  EmployeeActionType,
} from '../actions/actionTypes'
import { EmployeeTypes } from '../actions/EmployeeTypes'


interface initialStateInterface {
  employees: EmployeeTypes[]
  employee: {}
  editMode: boolean
  error: boolean
  isSaveBtnClicked: boolean
  isEditBtnClicked: boolean
  edit: boolean
}
const initialState: initialStateInterface = {
  employees: [],
  employee: {},
  editMode: false,
  error: false,
  isSaveBtnClicked: false,
  isEditBtnClicked: false,
  edit: false,
}
type MyReducer = typeof initialState

export default function(state: MyReducer = initialState, action:EmployeeActionType) {
  switch (action.type) {
    case FETCH_EMPLOYEES_ASYNC:
      return {
        ...state,
        employees: action.payload
      };
    case FETCH_EMPLOYEES_ASYNC_ERROR:
      return {
        ...state,
        error: true
      };
    case ADD_EMPLOYEE_ASYNC: {
      return {
        ...state,
        employees: state.employees.concat([action.payload]),
        edit: false,
      }
    }
    case DELETE_EMPLOYEE_ASYNC:
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.payload),
        edit: false
      };

    case EDIT_MODE:
      return {
        ...state,
        isEditBtnClicked: true
      };
    case FETCH_EMPLOYEE_BY_ID: {
      return {
        ...state,
        employee: state.employees.find(emp => emp.id === action.payload)
      };
    }
    case EDIT_EMPLOYEE_ASYNC:
      return {
        ...state,
        employee: action.payload,
        isEditBtnClicked: false,
        edit: true
      };
    case EDITED:
      return {
        ...state,
        edit: true
      };
    case ADD_EMPLOYEE_BUTTON_CLICKED:
      return {
        ...state,
        edit: false
      };
    default:
      return state;
  }
}
