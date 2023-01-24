import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoginForm } from '@/components/LoginForm'
import { LoginTitle } from '@/components/LoginTitle'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'

export function LoginPage({}: Props) {
  return (
    <>
      <ScreenWrapper>
        <Header />

        <LoginTitle />
        <LoginForm />

        <Footer />
      </ScreenWrapper>
    </>
  )
}

type Props = {}
