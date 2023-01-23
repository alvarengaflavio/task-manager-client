import styled from 'styled-components'
import {
  StyledLoginForm,
  StyledLoginSection,
} from '../LoginForm/StyledLoginForm'

export const StyledRegisterForm = styled(StyledLoginForm)`
  #confirm-password::placeholder {
    text-indent: calc(50% - 4rem);
  }
`

export const StyledRegisterSection = styled(StyledLoginSection)``
