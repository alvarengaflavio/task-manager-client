import styled from 'styled-components'

export const StyledPrimaryButton = styled.button`
  border-radius: 8px;
  padding: 0.3em 0.6em;
  font-size: var(--font-size-md);
  font-family: inherit;
  font-weight: 400;

  border: 2px solid transparent;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.buttonSecondary};
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  /* &:focus, */
  &:focus-visible {
    outline: none;
    border-color: ${(props) => props.theme.colors.interactive};

    background-color: ${(props) => props.theme.colors.interactive};
  }
`

export const StyledSecondaryButton = styled.button`
  border-radius: 8px;
  padding: 0.3em 0.6em;
  font-size: var(--font-size-md);
  font-family: inherit;
  font-weight: 400;

  border: 2px solid; // ${(props) => props.theme.colors.buttonSecondary};
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  color: ${(props) => props.theme.colors.buttonPrimary};
  cursor: pointer;
  transition: var(--transition);

  &:hover,
    /* &:focus, */
    &:focus-visible {
    outline: none;
    border-color: ${(props) => props.theme.colors.interactive};

    color: ${(props) => props.theme.colors.interactive};
  }
`
