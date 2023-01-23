import { StyledErrorList } from './StyledErrorList'

export const ErrorList = ({ errors }: Props) => {
  return (
    <StyledErrorList className="error-wrapper">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>
            <p key={index}>{error}</p>
          </li>
        ))}
      </ul>
    </StyledErrorList>
  )
}

type Props = {
  errors: string[]
}
