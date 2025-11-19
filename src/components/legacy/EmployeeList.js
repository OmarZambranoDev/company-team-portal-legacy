import { Component } from 'react'
import { connect } from 'react-redux'
import { setEmployees } from '../../state/redux/actions'
import { mockEmployees } from '../../mocks/employees'

class EmployeeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localEmployees: []
    }
  }

  componentDidMount() {
    // Simulate fetching data - in real app this would be an API call
    this.setState({ localEmployees: mockEmployees })
    this.props.setEmployees(mockEmployees);
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

const mapDispatchToProps = {
  setEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)