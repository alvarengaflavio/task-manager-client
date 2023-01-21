import styled from 'styled-components'
import { StyledCard } from '../styles/StyledCard'

export const StyledAboutCard = styled(StyledCard)`
  width: calc(50%);
  height: 100%;
  min-width: 480px;
  min-height: 480px;
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: var(--font-size-xxxl);
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--font-size-md);
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  }

  button {
    margin-top: 2rem;
  }
`
