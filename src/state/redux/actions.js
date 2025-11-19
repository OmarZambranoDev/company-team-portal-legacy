export const SET_EMPLOYEES = 'SET_EMPLOYEES';

export const setEmployees = (employees) => ({
    type: SET_EMPLOYEES,
    payload: employees,
});

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const addEmployee = (employee) => ({
    type: ADD_EMPLOYEE,
    payload: employee,
});

export const ADD_TEAM = 'ADD_TEAM';

export const addTeam = (team) => ({
    type: ADD_TEAM,
    payload: team,
});

export const UPDATE_TEAM = 'UPDATE_TEAM';

export const updateTeam = (id, team) => ({
    type: UPDATE_TEAM,
    payload: { id, team },
});
