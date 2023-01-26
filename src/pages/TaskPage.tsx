import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { TaskCard } from '@/components/shared/TaskCard'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function TaskPage({}: Props) {
  const navigate = useNavigate()
  const { isLoading, handleIsLogged, handleIsLoading } =
    useContext<GetTasksList>(TalespireContext as any)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) {
      handleIsLogged(false)
      navigate('/login')
      return
    }

    handleIsLogged(true)
    handleIsLoading(true)
  }, [])

  return (
    <ScreenWrapper>
      <Header />
      <TaskCard>{isLoading ? <LoadingSpinner /> : <h1>Task Page</h1>}</TaskCard>

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
