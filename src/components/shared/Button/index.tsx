import { StyledPrimaryButton, StyledSecondaryButton } from './StyledButton'

type Props = {
  text?: string
  handleClick?: () => void
  style?: 'primary' | 'secondary'
}

export function Button({
  text = 'Button',
  handleClick = () => {
    console.log('Clicked')
  },
  style = 'primary',
}: Props) {
  if (style === 'primary') {
    return (
      <StyledPrimaryButton onClick={handleClick}>{text}</StyledPrimaryButton>
    )
  }

  return (
    <StyledSecondaryButton onClick={handleClick}>{text}</StyledSecondaryButton>
  )
}
