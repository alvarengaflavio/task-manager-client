import styled from 'styled-components'

export const StyledErrorList = styled.div`
  border-radius: 9px;
  margin: 2rem auto 0 auto;
  width: 75%;

  font-size: var(--font-size-sm);
  color: var(--color-white);
  background-color: ${({ theme }) => theme.colors.inlineError};
  transition: var(--transition);

  ul {
    color: var(--color-white);
    font-size: var(--font-size-sm);
    padding: 1rem 1rem 1rem 2rem;
    line-height: 1.2;
  }

  p {
    font-weight: 400;
    font-size: var(--font-size-sm);
    color: var(--color-white);
  }
`
