import styled from 'styled-components'

export const StyledTaskList = styled.section`
  display: grid;
  grid-template-columns: 1/2fr 1/2fr;
  grid-gap: 2rem;
  margin: 0.2rem auto 0 auto;
  max-width: 800px;
  min-height: 60vh;

  z-index: 1;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
