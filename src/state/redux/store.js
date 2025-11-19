import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { mockTeams } from '../../mocks/teams'

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

const teamsReducer = (state = mockTeams, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return [...state, action.payload]
    case 'UPDATE_TEAM':
      return state.map((team) =>
        team.id === action.payload.id
          ? { ...team, ...action.payload.team }
          : team);
    default:
      return state
  }
}

const rootReducer = combineReducers({
  employees: employeesReducer,
  teams: teamsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
