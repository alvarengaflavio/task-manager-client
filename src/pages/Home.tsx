import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TaskFilter } from '@/components/shared/TaskFilter'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TaskList } from '@/components/TaskList'
import { TaskMenu } from '@/components/TaskMenu'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { StatusFilter, Task } from '@/utils/types/tasks'
import { useContext, useEffect } from 'react'

export function HomePage({}: Props) {
  const { getTasksList, tasksList, setTasksList, statusFilter } =
    useContext<GetTasksList>(TalespireContext as any)

  useEffect(() => {
    getTasksList(statusFilter)
  }, [tasksList, statusFilter])

  const handleUpdate = async (newTask: Task) => {
    setTasksList([...tasksList, newTask])
  }

  return (
    <ScreenWrapper>
      <Header />

      <TaskMenu updateTasksList={handleUpdate} />
      <TaskFilter />
      <TaskList />

      <Footer />
    </ScreenWrapper>
  )
}

type Props = {}

type GetTasksList = {
  tasksList: Task[]
  statusFilter: StatusFilter
  getTasksList: (filter: StatusFilter) => Promise<void>
  setTasksList: (tasks: Task[]) => void
}
