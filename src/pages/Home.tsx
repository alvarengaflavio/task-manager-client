import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TaskFilter } from '@/components/shared/TaskFilter'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TaskList } from '@/components/TaskList'
import { TaskMenu } from '@/components/TaskMenu'

export function HomePage({}: Props) {
  return (
    <>
      <ScreenWrapper>
        <Header />

        <TaskMenu />
        <TaskFilter />
        <TaskList />
        <Footer />
      </ScreenWrapper>
    </>
  )
}

type Props = {}
