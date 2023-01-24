import logo from '@/assets/logo-av.png'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper, StyledAboutLink, StyledFooter } from './StyledFooter'

type Props = {}

export function Footer({}: Props) {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  const handleAbout = () => {
    navigate('/about')
  }

  return (
    <FooterWrapper>
      <StyledFooter>
        <div>
          <img src={logo} alt="alvarenga logo" />
        </div>
        <div>
          <StyledAboutLink onClick={handleAbout}>ABOUT</StyledAboutLink>
        </div>
        <div>
          <p>© {currentYear} alva</p>
          <p>All rights reserved </p>
        </div>
      </StyledFooter>
    </FooterWrapper>
  )
}
