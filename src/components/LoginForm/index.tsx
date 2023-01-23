import { login } from '@/contexts/talespire/TalespireActions'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../shared/Button'
import { StyledLoginForm, StyledLoginSection } from './StyledLoginForm'

export function LoginForm({ children }: Props) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

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

    if (username === '' || password === '') {
      return
    }

    await login({ username, password })
  }

  return (
    <StyledLoginSection>
      <StyledLoginForm onSubmit={handleSubmit}>
        <p>Sign in to your account</p>
        <div className="form-wrapper">
          <div>
            <FaUser size={24} />
            {/* <label htmlFor="inputEmail">EMAIL</label> */}
          </div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            pattern="[A-Za-z0-9\-]{1,20}"
            required
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
            pattern="^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$"
            required
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
        {/* <Button type="button" text="Forgot Password?" style="primary" /> */}
      </StyledLoginForm>

      {children}
    </StyledLoginSection>
  )
}

type Props = {
  children?: React.ReactNode
}
