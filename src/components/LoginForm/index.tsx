import { login } from '@/contexts/talespire/TalespireActions'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { loginFormValidator } from '@/utils/validators.util'
import { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../shared/Button'
import { ErrorList } from '../shared/ErrorList'
import { StyledLoginForm, StyledLoginSection } from './StyledLoginForm'

export function LoginForm({ children }: Props) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [errorState, setErrorState] = useState<string[]>([])
  const { handleIsLogged } = useContext<{
    handleIsLogged: (isLogged: boolean) => void
  }>(TalespireContext as any)

  const handleRegister = () => {
    navigate('/register')
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const username = e.currentTarget.username.value
    const password = e.currentTarget.password.value

    const errorsList = loginFormValidator(username, password)

    if (errorsList.length > 0) {
      setErrorState(() => errorsList)
      return
    }

    const response = await login({ username, password })

    if (response[0] === 'Success') {
      handleIsLogged(true)
      return
    }

    setErrorState(() => response)
  }

  return (
    <StyledLoginSection>
      <StyledLoginForm onSubmit={handleSubmit}>
        <p>Sign in to your account</p>
        <div className="form-wrapper">
          <div>
            <FaUser size={24} />
          </div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </div>
        <div className="form-wrapper">
          <div>
            <MdLock size={24} />
            {/* <label htmlFor="inputPassword">PASSWORD</label> */}
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="password"
          />

          {showPassword ? (
            <IoEyeOff
              size={22}
              className={'form-input-password'}
              onClick={handleShowPassword}
            />
          ) : (
            <MdRemoveRedEye
              size={22}
              className={'form-input-password'}
              onClick={handleShowPassword}
            />
          )}
        </div>

        <div className="login-btn--wrapper">
          <Button type="submit" text="Login" style="secondary" />
          <Button
            type="button"
            text="Register"
            style="primary"
            handleClick={handleRegister}
          />
        </div>

        {errorState.length > 0 && <ErrorList errors={errorState} />}
      </StyledLoginForm>

      {children}
    </StyledLoginSection>
  )
}

type Props = {
  children?: React.ReactNode
}
