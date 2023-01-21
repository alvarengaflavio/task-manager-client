import styled from 'styled-components'

export const StyledFooter = styled.section`
  width: 100vw;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: var(--font-size-sm);
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  img {
    margin-top: 0.8rem;
    width: 4rem;
  }
`
export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100vw;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  z-index: 1;
`
