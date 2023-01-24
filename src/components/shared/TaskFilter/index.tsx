import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { StatusFilter } from '@/utils/types/tasks'
import { useContext } from 'react'
import { Button } from '../Button'
import { StyledTaskFilter } from './StyledTaskFilter'

export function TaskFilter({}: Props) {
  const { statusFilter, handleStatusFilter } = useContext<FilterState>(
    TalespireContext as any
  )

  const handleClick = (filter: StatusFilter) => {
    handleStatusFilter(filter)
  }

  return (
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
  )
}

type Props = {}

type FilterState = {
  statusFilter: StatusFilter
  handleStatusFilter: (filter: StatusFilter) => void
}
