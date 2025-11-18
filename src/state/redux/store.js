import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// Legacy reducer pattern
const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.payload
    case 'ADD_EMPLOYEE':
      return [...state, action.payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  employees: employeesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))