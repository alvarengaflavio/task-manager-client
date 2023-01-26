import { StyledCard } from '@/components/styles/StyledCard'
import styled from 'styled-components'

export const TaskCardWrapper = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  min-height: 30rem;
  max-width: 50rem;
  width: var(--container-width-lg);

  @media screen and (max-width: 768px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 480px) {
    width: var(--container-width-sm);
  }
`
