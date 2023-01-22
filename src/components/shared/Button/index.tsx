import { type } from 'os'
import { StyledPrimaryButton, StyledSecondaryButton } from './StyledButton'

type Props = {
  text?: string
  handleClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  style?: 'primary' | 'secondary'
}

export function Button({
  handleClick = () => {},
  text = 'Button',
  type = 'button',
  style = 'primary',
}: Props) {
  if (style === 'primary') {
    return (
      <StyledPrimaryButton type={type} onClick={handleClick}>
        {text}
      </StyledPrimaryButton>
    )
  }

  return (
    <StyledSecondaryButton onClick={handleClick} type={type}>
      {text}
    </StyledSecondaryButton>
  )
}
