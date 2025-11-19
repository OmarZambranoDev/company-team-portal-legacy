import { useAppState } from '../../state/contexts/AppStateContext'
import './Navigation.css'

const Navigation = () => {
  const { currentView, setCurrentView } = useAppState()

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2>Company Portal</h2>
      </div>
      <ul className="nav-list">
        <li>
          <button
            className={currentView === 'employees' ? 'active' : ''}
            onClick={() => setCurrentView('employees')}
          >
            Employees
          </button>
        </li>
        <li>
          <button
            className={currentView === 'departments' ? 'active' : ''}
            onClick={() => setCurrentView('departments')}
          >
            Departments
          </button>
        </li>
        <li>
          <button
            className={currentView === 'teams' ? 'active' : ''}
            onClick={() => setCurrentView('teams')}
          >
            Teams
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation