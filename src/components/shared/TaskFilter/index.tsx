import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { StatusFilter } from '@/utils/types/tasks'
import { useContext } from 'react'
import { Button } from '../Button'
import FilterInput from './FilterInput'
import { StyledTaskFilter } from './StyledTaskFilter'

export function TaskFilter({}: Props) {
  const { statusFilter, setStatusFilter, setTextFilter } =
    useContext<FilterState>(TalespireContext as any)

  const handleClick = (filter: StatusFilter) => {
    setStatusFilter(filter)
  }

  const handleSearch = (value: string) => {
    setTextFilter(value)
  }

  return (
    <>
      <StyledTaskFilter>
        <Button
          text="All"
          handleClick={() => handleClick('ALL')}
          className={statusFilter === 'ALL' ? 'active' : ''}
        />
        <Button
          text="Open"
          handleClick={() => handleClick('OPEN')}
          className={statusFilter === 'OPEN' ? 'active' : ''}
        />
        <Button
          text="In Progress"
          handleClick={() => handleClick('IN_PROGRESS')}
          className={statusFilter === 'IN_PROGRESS' ? 'active' : ''}
        />
        <Button
          text="Done"
          handleClick={() => handleClick('DONE')}
          className={statusFilter === 'DONE' ? 'active' : ''}
        />
      </StyledTaskFilter>

      <FilterInput onSearch={handleSearch} />
    </>
  )
}

type Props = {}

type FilterState = {
  statusFilter: StatusFilter
  setStatusFilter: (filter: StatusFilter) => void
  setTextFilter: (value: string) => void
}
