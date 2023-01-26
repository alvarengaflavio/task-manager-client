import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {    transform: rotate(0deg);  }
  100% {    transform: rotate(360deg);  }
`

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem auto;
`

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid;
  border-top: 8px solid;
  border-color: var(--color-light) var(--color-white) var(--color-white)
    var(--color-white);
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
`
