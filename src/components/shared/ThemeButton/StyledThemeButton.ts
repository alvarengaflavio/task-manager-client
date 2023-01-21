import styled from 'styled-components'

export const StyledDarkButton = styled.button`
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 0;
  width: 2.4em;
  height: 2.4em;
  font-size: var(--font-size-sm);
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: var(--transition);

  svg {
    vertical-align: middle;
    align-self: center;
  }

  &:hover,
  &:focus-visible {
    outline: none;
    border-color: ${(props) => props.theme.colors.interactive};
  }
`

export const StyledLightButton = styled.button`
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 0;
  width: 2.4em;
  height: 2.4em;
  font-size: var(--font-size-sm);
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: var(--transition);

  svg {
    vertical-align: middle;
    align-self: center;
  }

  &:hover,
  &:focus-visible {
    outline: none;

    border-color: ${(props) => props.theme.colors.interactive};

    background-color: ${(props) => props.theme.colors.interactive};
  }
`
