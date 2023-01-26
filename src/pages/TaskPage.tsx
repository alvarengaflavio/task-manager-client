import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { TaskCard } from '@/components/shared/TaskCard'
import { TaskCardItem } from '@/components/shared/TaskCard/TaskCardItem'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { getTaskById } from '@/contexts/talespire/TalespireActions'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { Task } from '@/utils/types/tasks'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function TaskPage({}: Props) {
  const navigate = useNavigate()
  const params = useParams()

  const { isLoading, handleIsLogged, handleIsLoading } =
    useContext<GetTasksList>(TalespireContext as any)
  const [taskItem, setTaskItem] = useState<TaskState>(InitialTask)
  const [mode, setMode] = useState<Mode>('view')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) {
      handleIsLogged(false)
      navigate('/login')
      return
    }

    handleIsLogged(true)
    handleIsLoading(true)

    const getTask = async () => {
      const hasTask = await getTaskById(parseInt(params.id as string))

      setTaskItem(hasTask)
      handleIsLoading(false)
    }

    getTask()
  }, [])

  return (
    <ScreenWrapper>
      <Header />
      <TaskCard>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <TaskCardItem task={taskItem} viewMode={mode} setMode={setMode} />
        )}
      </TaskCard>

      <Footer />
    </ScreenWrapper>
  )
}

type Props = {}

type GetTasksList = {
  isLoading: boolean
  handleIsLogged: (isLogged: boolean) => void
  handleIsLoading: (isLoading: boolean) => void
}

interface TaskState extends Task {
  userId?: number
}

export type Mode = 'edit' | 'view' | 'delete'

const InitialTask: TaskState = {
  id: 0,
  status: 'OPEN',
  title: '',
  description: '',
  createdAt: '',
  userId: 0,
}
