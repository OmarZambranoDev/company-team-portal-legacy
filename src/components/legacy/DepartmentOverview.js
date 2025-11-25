import { Component } from 'react'

const departments = [
  { id: 1, name: 'Engineering', employeeCount: 45 },
  { id: 2, name: 'Marketing', employeeCount: 23 },
  { id: 3, name: 'Sales', employeeCount: 34 },
  { id: 4, name: 'HR', employeeCount: 12 }
];

class DepartmentOverview extends Component {
  constructor(props){
    super(props);
  }

  filterDepartments = () => {
    const { searchTerm } = this.props

    if (!searchTerm) return departments

    return departments.filter(department =>
      department.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
  render() {
    const departments = this.filterDepartments();

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