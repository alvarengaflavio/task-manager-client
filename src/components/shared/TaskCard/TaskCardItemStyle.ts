import styled from 'styled-components'

export const TaskCardItemStyle = styled.div`
  position: relative;
  display: flex;
  font-family: inherit;
  flex-direction: column;
  width: 90%;
  height: 28rem;

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
        font-size: var(--font-size-md);
        text-align: left;
        margin-right: 0.5rem;
        font-weight: 200;
      }

      h4 {
        width: 100%;
        border-radius: 0.5rem;
        height: 4rem;
        text-align: center;
        font-size: var(--font-size-lg);
        background: rgba(255, 255, 255, 0.1);
      }

      p {
        text-align: center;
        border-radius: 0.5rem;
        line-height: 1.5;
        vertical-align: middle;
        width: 100%;
        padding: 0.2rem;
        overflow: auto;
        font-size: var(--font-size-md);
        font-weight: 300;
        color: var(--color-disabled-primary);
        background: rgba(255, 255, 255, 0.1);
      }

      select {
        text-align: center;
        align-self: center;
        width: 30rem;
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

    input.input--description {
      height: 8rem;
    }

    select {
      border-radius: 0.5rem;
      border: 1px solid var(--color-disabled);
      width: 100%;
      height: 2.5rem;
      margin: 0.5rem auto;
      padding: 0.5rem;
      font-size: var(--font-size-md);

      option {
        font-size: var(--font-size-md);
      }
    }
  }

  div.form--wrapper.text--wrapper {
    div {
      &:nth-child(1) {
        height: 2rem;
      }
      &:nth-child(2) {
        height: 8rem;
      }

      &:nth-child(3) {
        height: 5rem;
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
