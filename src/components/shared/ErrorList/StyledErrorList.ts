import styled from 'styled-components'

export const StyledErrorList = styled.div`
  border-radius: 9px;
  margin: 2rem auto 0 auto;
  width: 70%;

  font-size: var(--font-size-sm);
  color: var(--color-white);
  background-color: ${({ theme }) => theme.colors.inlineError};
  transition: var(--transition);

  ul,
  li,
  p {
    font-size: var(--font-size-sm);
  }

  ul {
    color: var(--color-white);
    padding: 1rem 1rem 1rem 2rem;
    line-height: 1.2;
  }

  p {
    color: var(--color-white);
  }
`
