import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TaskFilter } from '@/components/shared/TaskFilter'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TaskList } from '@/components/TaskList'
import { TaskMenu } from '@/components/TaskMenu'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { getOrderedTasks } from '@/utils/functions.util'
import { StatusFilter, Task } from '@/utils/types/tasks'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function HomePage({}: Props) {
  const navigate = useNavigate()
  const {
    getTasksList,
    tasksList,
    setTasksList,
    statusFilter,
    isLogged,
    handleIsLogged,
  } = useContext<GetTasksList>(TalespireContext as any)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      handleIsLogged(true)
      getTasksList(statusFilter)
      return
    }

    if (!isLogged) {
      localStorage.removeItem('accessToken')
      navigate('/login')
      return
    }
  }, [statusFilter, isLogged])

  const handleUpdate = async (newTask: Task) => {
    const newTasksList = getOrderedTasks([...tasksList, newTask])
    setTasksList(newTasksList)
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
  isLogged: boolean
  getTasksList: (filter: StatusFilter) => Promise<void>
  setTasksList: (tasks: Task[]) => void
  handleIsLogged: (isLogged: boolean) => void
}
