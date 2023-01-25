import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TaskFilter } from '@/components/shared/TaskFilter'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TaskList } from '@/components/TaskList'
import { TaskMenu } from '@/components/TaskMenu'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { StatusFilter } from '@/utils/types/tasks'
import { useContext, useEffect } from 'react'

export function HomePage({}: Props) {
  const { getTasksList } = useContext<GetTasksList>(TalespireContext as any)

  useEffect(() => {
    getTasksList('ALL')
  }, [])

  return (
    <ScreenWrapper>
      <Header />

      <TaskMenu />
      <TaskFilter />
      <TaskList />

      <Footer />
    </ScreenWrapper>
  )
}

type Props = {}

type GetTasksList = {
  getTasksList: (filter: StatusFilter) => Promise<void>
}
