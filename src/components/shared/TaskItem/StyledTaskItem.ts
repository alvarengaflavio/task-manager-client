import styled from 'styled-components'

export const StyledTaskItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  border-radius: 9px;
  height: 9rem;
  max-width: 50rem;
  min-width: calc(50rem);
  width: 90%;

  transition: background-color 0.2s ease-in-out;

  background: ${({ theme }) => theme.colors.backgroundVar};

  &:hover {
    background-color: rgba(52, 160, 240, 0.2);
  }

  div.text--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    padding-left: 2rem;
    gap: 0.3rem;
    width: 93%;
    cursor: pointer;

    h4 {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      font-weight: 300;
      width: 100%;
      text-align: center;
    }

    p:first-of-type {
      height: 70%;
      min-height: 4.5rem;
      font-weight: 300;
      line-height: 1.5rem;
      font-size: var(--font-size-md);
    }

    p:last-child {
      font-size: var(--font-size-sm);
      height: 1rem;
    }
  }

  div.status--wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 3.5rem);
    right: 1rem;

    button {
      border-radius: 50%;
      border: 1px solid transparent;
      margin: 0.2rem 0;
      width: 2rem;
      height: 2rem;

      color: var(--color-disabled-text);
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

      cursor: pointer;
      z-index: 5;

      &:hover {
        color: var(--color-white);
        border-color: ${({ theme }) => theme.colors.backgroundVar};
        background-color: ${({ theme }) => theme.colors.interactive};
      }

      &.active {
        color: var(--color-white);
        border-color: var(--color-white);
        background-color: ${({ theme }) => theme.colors.interactive};
      }

      svg {
        margin-top: 3px;
      }
    }
  }

  div.status--wrapper.status--text {
    top: 0.5rem;
    left: 0;
    height: 100%;
    width: 2rem;
    z-index: 5;

    span {
      font-size: var(--font-size-sm);
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      text-align: center;
      align-self: center;
      height: 80%;
      margin: 0.5rem 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 40rem;
  }
`
