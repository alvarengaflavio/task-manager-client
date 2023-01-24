import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoginTitle } from '@/components/LoginTitle'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TaskMenu } from '@/components/TaskMenu'

export function HomePage({}: Props) {
  return (
    <>
      <ScreenWrapper>
        <Header />

        <LoginTitle />
        <TaskMenu />
        <Footer />
      </ScreenWrapper>
    </>
  )
}

type Props = {}
