import styled from 'styled-components'

export const StyledFilterDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 1.1rem;
  height: 2rem;

  input {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0 1rem;
    font-size: var(--font-size-md);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 3rem;
    border-radius: 0 0.5rem 0.5rem 0;

    background-color: ${({ theme }) => theme.colors.backgroundVar};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};

    cursor: pointer;
  }
`
