import styled from 'styled-components'

export const StyledErrorDiv = styled.div`
  border-radius: 9px;
  border: inset 2px rgba(0, 0, 0, 0.2);
  margin: 2rem auto 0 auto;
  width: 75%;

  font-size: var(--font-size-sm);
  color: var(--color-white);
  background-color: ${({ theme }) => theme.colors.inlineError};
  transition: var(--transition);
`
export const StyledList = styled.ul`
  font-size: inherit;
  padding: 1.2rem 1.2rem 1.2rem 2.4rem;
  line-height: 1.5;

  color: var(--color-white);
`

export const StyledListItem = styled.li`
  font-size: inherit;
`

export const StyledSpan = styled.span`
  font-size: inherit;
  font-weight: 400;
  color: var(--color-white);
`
