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
