import { type } from 'os'
import { StyledPrimaryButton, StyledSecondaryButton } from './StyledButton'

type Props = {
  text?: string
  handleClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  style?: 'primary' | 'secondary'
  className?: string
}

export function Button({
  handleClick = () => {},
  text = 'Button',
  type = 'button',
  style = 'primary',
  className = '',
}: Props) {
  if (style === 'primary') {
    return (
      <StyledPrimaryButton
        type={type}
        onClick={handleClick}
        className={className}
      >
        {text}
      </StyledPrimaryButton>
    )
  }

  return (
    <StyledSecondaryButton
      onClick={handleClick}
      type={type}
      className={className}
    >
      {text}
    </StyledSecondaryButton>
  )
}
