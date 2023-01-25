import styled from 'styled-components'
import { StyledCard } from '../styles/StyledCard'

export const StyledTaskMenu = styled(StyledCard)`
  width: 90%;
  max-width: 50rem;
  height: 16rem;

  margin: 2rem auto 0 auto;

  h4 {
    font-size: var(--font-size-xl);
    font-weight: 300;
    margin: 0.5rem 0 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 0.5rem;
    height: 100%;
    width: 90%;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    input {
      width: 80%;
      height: 3.2rem;
      padding: 0 1rem;
      border: 1px solid var(--color-grey);
      border-radius: 0.5rem;
      font-size: var(--font-size-md);
    }

    input::placeholder {
      text-align: center;
    }

    label {
      font-size: var(--font-size-md);
      font-weight: 300;
      align-self: center;
      margin: 0;
      padding: 0;
    }

    button {
      width: 10rem;
      height: 3.2rem;
    }
  }
`
export const ErrorWrapper = styled.div`
  width: 80%;
  height: 5rem;
  margin: 4rem auto 2rem auto;
`
