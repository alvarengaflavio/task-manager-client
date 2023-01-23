import {
  StyledErrorDiv,
  StyledList,
  StyledListItem,
  StyledSpan,
} from './StyledErrorList'

export const ErrorList = ({ errors }: Props) => {
  return (
    <StyledErrorDiv>
      <StyledList>
        {errors.map((error, index) => (
          <StyledListItem key={index}>
            <StyledSpan key={index}>{error}</StyledSpan>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledErrorDiv>
  )
}

type Props = {
  errors: string[]
}
