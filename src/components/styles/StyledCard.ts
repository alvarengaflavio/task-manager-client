import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: auto auto;
  z-index: 0;

  background-color: ${({ theme }) => theme.colors.backgroundVar};
`
