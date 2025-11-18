import React, { Component } from 'react'
import { connect } from 'react-redux'

class EmployeeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localEmployees: []
    }
  }

  componentDidMount() {
    // Simulate fetching data - in real app this would be an API call
    const mockEmployees = [
      { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@company.com' },
      { id: 2, name: 'Jane Smith', department: 'Marketing', email: 'jane@company.com' },
      { id: 3, name: 'Mike Johnson', department: 'Engineering', email: 'mike@company.com' }
    ]
    this.setState({ localEmployees: mockEmployees })
  }

  filterEmployees = () => {
    const { localEmployees } = this.state
    const { searchTerm } = this.props
    
    if (!searchTerm) return localEmployees
    
    return localEmployees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  render() {
    const employees = this.filterEmployees()

    return (
      <div className="employee-list">
        <h2>Employees ({employees.length})</h2>
        {employees.map(employee => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>Department: {employee.department}</p>
            <p>Email: {employee.email}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxEmployees: state.employees
})

export default connect(mapStateToProps)(EmployeeList)