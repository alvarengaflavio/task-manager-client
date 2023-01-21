import styled from 'styled-components'

export const StyledLoginForm = styled.form`
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  p {
    font-size: var(--font-size-xxl);
    margin-bottom: 0.5rem;
    font-weight: 300;

    color: ${({ theme }) => theme.colors.primary};
  }
  .form-wrapper {
    position: relative;
    display: flex;
    width: 21rem;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    flex-direction: row;
  }

  svg {
    vertical-align: middle;
    margin-right: 0.2rem;
  }

  label {
    font-size: var(--font-size-sm);
    text-align: start;
    vertical-align: middle;
  }

  input {
    width: 14rem;
    padding: 0.5rem;
    border-radius: 12px;
    flex-basis: 1rem;
    font-size: var(--font-size-md);
    border: 2px solid transparent;

    outline: 1px solid ${({ theme }) => theme.colors.secondary};

    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.secondary};

    transition: var(--transition), border-color 0.3s ease;
  }

  input:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.interactive};
  }

  input::placeholder {
    text-align: center;
  }

  .form-input-password {
    position: absolute;
    right: 3px;
    cursor: pointer;
  }
`
export const StyledLoginSection = styled.section`
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  margin: 8em auto 2em auto;
  padding: 1em 0 0 0;

  height: 30rem;
  width: var(--container-width-lg);
  max-width: 40em;

  background-color: ${({ theme }) => theme.colors.backgroundVar};
  color: ${({ theme }) => theme.colors.secondary};

  transition: --var(--transition);

  @media screen and (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 768px) {
    width: var(--container-width-sm);
  }
`
