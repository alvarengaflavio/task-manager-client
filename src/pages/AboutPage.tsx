import { AboutCard } from '@/components/AboutCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/shared/Button'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { useNavigate } from 'react-router-dom'

type Props = {}

export function AboutPage({}: Props) {
  const navigate = useNavigate()

  const navToHome = () => {
    navigate('/home')
  }

  return (
    <ScreenWrapper>
      <Header />

      <AboutCard>
        <Button style="primary" text="Go Back" handleClick={navToHome} />
      </AboutCard>

      <Footer />
    </ScreenWrapper>
  )
}
