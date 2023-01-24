import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { TalespireState } from '@/contexts/talespire/TalespireReducer'
import { Task } from '@/utils/types/tasks'
import { useContext } from 'react'
import { TaskItem } from '../shared/TaskItem'
import { StyledTaskList } from './StyledTaskList'

export function TaskList({}: Props) {
  const { statusFilter } = useContext<Partial<TalespireState>>(TalespireContext)

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          createdAt={task.createdAt}
        />
      ))}
    </StyledTaskList>
  )
}

type Props = {}

const tasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    status: 'OPEN',
    createdAt: '2021-01-01',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    status: 'IN_PROGRESS',
    createdAt: '2021-01-02',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    status: 'DONE',
    createdAt: '2021-01-03',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Description 4',
    status: 'OPEN',
    createdAt: '2021-01-04',
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'Description 5',
    status: 'OPEN',
    createdAt: '2021-01-05',
  },
]
