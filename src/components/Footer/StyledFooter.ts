import styled from 'styled-components'

export const StyledFooter = styled.section`
  font-family: inherit;
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
  position: relative;
  height: 1rem;
  width: 100vw;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  z-index: 1;
`

export const StyledAboutLink = styled.a`
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  outline: 1px solid;
  padding: 0.15rem 0.4rem 0rem 0.4rem;
  margin: 1rem auto;

  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};
  transition: var(--transition);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.interactive};
  }
`
