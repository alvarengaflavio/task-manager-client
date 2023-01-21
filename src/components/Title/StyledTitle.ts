import styled from 'styled-components'

export const StyledTitle = styled.h1`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: var(--font-size-xxl);
  line-height: 1.1;
  text-align: center;
  transition: var(--transition);
`
