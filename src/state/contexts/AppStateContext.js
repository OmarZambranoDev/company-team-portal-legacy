import React, { createContext, useState, useContext } from 'react'

const AppStateContext = createContext()

export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider')
  }
  return context
}

export const AppStateProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('employees')
  const [loading, setLoading] = useState(false)

  const value = {
    currentView,
    setCurrentView,
    loading,
    setLoading
  }

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}