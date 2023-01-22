import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoginForm } from '@/components/LoginForm'
import { LoginTitle } from '@/components/LoginTitle'
import { Button } from '@/components/shared/Button'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

export function LoginPage({}: Props) {
  const navigate = useNavigate()

  const NavtoAbout = () => {
    navigate('/about')
  }

  return (
    <>
      <ScreenWrapper>
        <Header />
        <LoginTitle />
        <LoginForm>
          <ButtonsWrapper>
            <Button style="secondary" text="About" handleClick={NavtoAbout} />
          </ButtonsWrapper>
        </LoginForm>
        <Footer />
      </ScreenWrapper>
    </>
  )
}

const ButtonsWrapper = styled.div`
  margin: 11.5rem auto 0 auto;
  width: max-content;
`
