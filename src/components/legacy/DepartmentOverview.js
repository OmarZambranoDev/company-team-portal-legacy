import React, { Component } from 'react'

class DepartmentOverview extends Component {
  render() {
    const departments = [
      { id: 1, name: 'Engineering', employeeCount: 45 },
      { id: 2, name: 'Marketing', employeeCount: 23 },
      { id: 3, name: 'Sales', employeeCount: 34 },
      { id: 4, name: 'HR', employeeCount: 12 }
    ]

    return (
      <div className="department-overview">
        <h2>Departments</h2>
        {departments.map(dept => (
          <div key={dept.id} className="department-item">
            <h3>{dept.name}</h3>
            <p>Employees: {dept.employeeCount}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default DepartmentOverview