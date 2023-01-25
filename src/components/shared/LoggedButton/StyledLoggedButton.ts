import styled from 'styled-components'

export const StyledLoggedButton = styled.button`
  position: absolute;
  right: calc(50% - 19rem);
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  border: none;
  outline: 1px solid;
  height: 1.8rem;
  padding: 0.15rem 0.4rem 0.15rem 0.4rem;
  margin: 1rem auto;

  color: inherit;
  background-color: inherit;
  transition: var(--transition);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.interactive};
  }

  &:active {
    color: ${({ theme }) => theme.colors.interactive};
    transform: scale(0.95);
  }
`
