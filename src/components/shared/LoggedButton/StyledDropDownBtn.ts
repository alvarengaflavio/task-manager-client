import styled from 'styled-components'

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  top: 3.1rem;
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const DropDownLi = styled.li`
  display: inline-block;
  float: left;

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.interactive};
  } */

  /* &:hover ${DropDownContent} {
    display: block;
  } */
`

export const StyledDropDownDiv = styled.div`
  position: absolute;
  right: calc(44% - 18rem);
  top: calc(50% - 1.5rem);
  width: 3rem;
  height: 3.5rem;

  &:hover ${DropDownContent} {
    display: block;
  }

  &:hover ${DropDownLi} {
    background-color: ${({ theme }) => theme.colors.interactive};
  }
`

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  height: 3rem;

  svg {
    align-self: center;
    margin-left: -0.1rem;
  }
`

export const Dropbtn = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

export const SubA = styled.a`
  color: ${({ theme }) => theme.colors.text};

  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive};
  }
`
