import { FooterWrapper, StyledFooter } from './StyledFooter'
import logo from '@/assets/logo-av.png'

type Props = {}

export function Footer({}: Props) {
  const currentYear = new Date().getFullYear()
  return (
    <FooterWrapper>
      <StyledFooter>
        <div>
          <img src={logo} alt="alvarenga logo" />
        </div>
        <div>
          <p>All rights reserved </p>
          <p>© {currentYear}</p>
        </div>
      </StyledFooter>
    </FooterWrapper>
  )
}
