import styled from 'styled-components'

export const StyledTaskItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  background-color: ${({ theme }) => theme.colors.backgroundVar};

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive};
  }
`
