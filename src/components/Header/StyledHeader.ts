import styled from 'styled-components'

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 4em;
  min-width: 100vw;
  z-index: 5;

  transition: var(--transition);

  /* border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}; */
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};

  background-color: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: var(--font-size-xxxl);
    font-weight: 300;
  }

  .theme {
    position: absolute;
    top: 1rem;
    right: calc(50% - 12em);
  }
`
