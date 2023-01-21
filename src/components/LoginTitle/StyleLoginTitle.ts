import styled from 'styled-components'

export const StyledLoginTitle = styled.div`
  align-self: center;
  height: 0;
  width: 100%;
  max-width: 40rem;
  padding-top: 8rem;
  font-family: inherit;
  text-align: center;
  z-index: 2;

  div {
    margin-top: 1rem;
    border-radius: 12px;
    padding: 0.5rem 0 0.8rem 0;

    background-color: ${({ theme }) => theme.colors.backgroundVar};
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  }

  h2 {
    font-size: var(--font-size-xxl);
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }

  h4 {
    font-size: var(--font-size-md);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
