import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoginTitle } from '@/components/LoginTitle'
import { RegisterForm } from '@/components/RegisterForm'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'

export function RegisterPage({}: Props) {
  return (
    <>
      <ScreenWrapper>
        <Header />
        <LoginTitle />
        <RegisterForm />
        <Footer />
      </ScreenWrapper>
    </>
  )
}

type Props = {}
