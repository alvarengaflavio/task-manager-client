import styled from 'styled-components'

export const StyledLoginTitle = styled.div`
  align-self: center;
  height: 0;
  width: var(--container-width-lg);
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
    /* box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.secondary}; */
  }

  h2 {
    font-size: var(--font-size-xxl);
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }

  h4 {
    font-size: var(--font-size-md);
    font-weight: 300;
    line-height: 1.4;
    padding: 0 1rem;

    color: ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 768px) {
    width: var(--container-width-sm);
  }
`
