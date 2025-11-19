import { useState } from 'react'
import Navigation from './components/shared/Navigation'
import EmployeeList from './components/legacy/EmployeeList'
import DepartmentOverview from './components/legacy/DepartmentOverview'
import TeamsOverview from './components/legacy/TeamsOverview'
import SearchBar from './components/modern/SearchBar'
import { useAppState } from './state/contexts/AppStateContext'
import './App.css'

function App() {
  const { currentView } = useAppState()
  const [searchTerm, setSearchTerm] = useState('')

  const renderCurrentView = () => {
    switch (currentView) {
      case 'employees':
        return <EmployeeList searchTerm={searchTerm} />
      case 'departments':
        return <DepartmentOverview />
      case 'teams':
        return <TeamsOverview />
      default:
        return <EmployeeList searchTerm={searchTerm} />
    }
  }

  return (
    <div className="app">
      <Navigation />
      <div className="app-content">
        <SearchBar onSearch={setSearchTerm} />
        {renderCurrentView()}
      </div>
    </div>
  )
}

export default App