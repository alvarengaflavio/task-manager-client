import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { StyledFilterDiv } from './StyledFilterInput'

const FilterInput: React.FC<Props> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  let timeoutId: any

  const handleSearch = () => {
    clearTimeout(timeoutId)
    onSearch(searchValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    clearTimeout(timeoutId)
  }

  useEffect(() => {
    timeoutId = setTimeout(handleSearch, 2000)
    return () => clearTimeout(timeoutId)
  }, [searchValue])

  return (
    <StyledFilterDiv>
      <input
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
        onStalled={handleSearch}
      />
      <div>
        <BsSearch onClick={handleSearch} size={24} />
      </div>
    </StyledFilterDiv>
  )
}

export default FilterInput

interface Props {
  onSearch: (value: string) => void
}
