import styled from 'styled-components'

export const ScreenWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(/src/assets/bg-texture6.png);
  min-height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  transition: var(--transition);
`
