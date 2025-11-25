import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (term: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  )
}

export default SearchBar