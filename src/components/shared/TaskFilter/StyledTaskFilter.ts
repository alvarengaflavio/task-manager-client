import styled from 'styled-components'

export const StyledTaskFilter = styled.div`
  display: flex;
  margin: 0.5rem auto;
  z-index: 1;

  button {
    border-radius: 0;
    width: 6.2rem;
    height: 2rem;
    font-size: var(--font-size-sm);
  }
  button:first-child {
    border-top-left-radius: 12rem;
    border-bottom-left-radius: 12rem;
  }

  button:last-child {
    border-top-right-radius: 8rem;
    border-bottom-right-radius: 8rem;
  }

  button:active {
    background-color: ${({ theme }) => theme.colors.interactive};
    color: var(--color-white);
  }

  button.active {
    background-color: ${({ theme }) => theme.colors.interactive};
    color: var(--color-white);
  }
`
