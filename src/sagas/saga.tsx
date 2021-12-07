import {
  takeEvery,
  call,
  put,
  // , delay
  StrictEffect,
} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {
  FETCH_EMPLOYEES,
  EDITED,
  FETCH_EMPLOYEES_ASYNC,
  // FETCH_Employee_ASYNC_ERROR,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_ASYNC,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_ASYNC,
  EDIT_EMPLOYEE_ASYNC,
  AddEmployeesAsync,
  EditEmployeeAsync,
  DeleteEmployeeAsync,
  EmployeeActionType,
} from '../actions/actionTypes'
import { employeeApi } from '../api/employeeApi'
import { EmployeeTypes } from '../actions/EmployeeTypes'

export default function* rootWatcher(): Generator<StrictEffect> {
  yield takeEvery(FETCH_EMPLOYEES, fetchEmployeeAsync)
  yield takeEvery(ADD_EMPLOYEE, addEmployeeAsync)
  yield takeEvery(EDIT_EMPLOYEE, editEmployeeAsync)
  yield takeEvery(DELETE_EMPLOYEE, deleteEmployeeAsync)
}

export function* fetchEmployeeAsync() {
  try
  {
    let response: AxiosResponse = yield call(employeeApi.get, '/api/employee')
  yield put({ type: FETCH_EMPLOYEES_ASYNC, payload: response.data })
  }
  catch(err){

  }
}

export function* addEmployeeAsync(action: AddEmployeesAsync) {
  try{
    yield call(
      employeeApi.post,
      '/api/add-employee',
      {
        name: action.payload.name,
        salary: action.payload.salary,
        gender: action.payload.gender,
        birthDate: action.payload.birthDate,
      }
    )
    yield put({ type: ADD_EMPLOYEE_ASYNC, payload: action.payload })
  }catch(error){
  }
}
export function* editEmployeeAsync(action: EditEmployeeAsync) {
  try{
    yield call(
      employeeApi.put,
      `/api/edit-employee/${(action.payload.id, action.payload)}`
    )
      yield put({ type: EDIT_EMPLOYEE_ASYNC, payload: action.payload })
      const data: AxiosResponse = yield call(employeeApi.get, '/api/employees')
      yield put({ type: FETCH_EMPLOYEES_ASYNC, payload: data.data })
  }catch(error){

  }
}
export function* deleteEmployeeAsync(action: DeleteEmployeeAsync) {
  try{
    yield call(employeeApi.delete, `/api/edit-employee/${action.payload.id}`)
  yield put({ type: DELETE_EMPLOYEE_ASYNC, payload: action.payload })
  console.log(action.payload)
  }catch(error){

  }
}
