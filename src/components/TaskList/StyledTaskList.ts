import styled from 'styled-components'

export const StyledTaskList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto 2rem auto;
  max-width: 800px;
  min-height: 60vh;

  z-index: 1;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
