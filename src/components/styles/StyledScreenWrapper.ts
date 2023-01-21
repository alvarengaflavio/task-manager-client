import styled from 'styled-components'

export const ScreenWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 200vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  transition: var(--transition);

  &::before {
    content: '';
    background-image: url(/src/assets/bg-texture6.png);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: 0;
  }
`
