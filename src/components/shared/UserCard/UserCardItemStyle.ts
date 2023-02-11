import styled from 'styled-components'

export const UserCardItemStyle = styled.div`
  position: relative;
  display: flex;
  font-family: inherit;
  flex-direction: column;
  width: 90%;
  height: 28rem;

  h4 {
    position: absolute;
    top: 0.5rem;
    left: calc(50% - 5rem);
    width: 10rem;
    font-size: var(--font-size-lg);
  }

  div.text--wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    margin-top: 1.5rem;
    text-align: center;

    div {
      display: flex;
      margin: 3rem auto 0;
      height: 2rem;
      width: 100%;
      min-width: 25rem;

      &:nth-child(2) {
        height: 8rem;
      }

      &:nth-child(3) {
        margin-top: 1rem;
        height: 2rem;
      }

      &:nth-child(4) {
        margin-top: 1rem;
        height: 2rem;
      }

      label {
        width: 8rem;
        height: 2.5rem;
        font-size: var(--font-size-md);
        text-align: left;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        font-weight: 200;
      }

      label.label--username {
        font-size: var(--font-size-lg);
        font-weight: 400;
        width: 100%;
        margin-left: 0.5rem;
      }
    }
  }

  button.btn--back {
    position: absolute;
    top: 1rem;
    right: 0;
    margin-bottom: 1rem;
  }

  div.btn--wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 3rem;

    button {
      width: 7rem;
      margin: 0 0.5rem;
    }
    width: 16rem;
  }

  form {
    input {
      border-radius: 0.5rem;
      border: 1px solid var(--color-disabled);
      width: 100%;
      height: 3rem;
      margin: 0.5rem 0;
      padding: 0.5rem;
      text-align: center;
      font-size: var(--font-size-md);
    }

    input.input--name {
      height: 2.5rem;
    }
  }

  div.form--wrapper.text--wrapper {
    div {
      &:nth-child(1) {
        margin-top: 5rem;
        height: 4rem;
      }
      &:nth-child(2) {
        height: 8rem;
      }

      &:nth-child(3) {
        height: 3rem;
      }
    }
  }

  form div.btn--wrapper {
    justify-content: center;

    button {
      width: 7rem;
      margin: 0 0.5rem;
    }
    width: 12rem;
  }
`
