import styled from 'styled-components'

export const StyledTaskList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;

  z-index: 1;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`