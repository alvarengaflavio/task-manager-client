import { StyledTitle } from './StyledTitle'

type Props = {
  text: string
}

export function Title({ text }: Props) {
  return (
    <div>
      <StyledTitle>{text}</StyledTitle>
    </div>
  )
}
