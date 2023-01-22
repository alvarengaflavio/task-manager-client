import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { Button } from '../shared/Button'
import { StyledLoginForm, StyledLoginSection } from './StyledLoginForm'

type Props = {
  children?: React.ReactNode
}

export function LoginForm({ children }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
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
          <input type="email" name="email" id="email" placeholder="username" />
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
          <Button type="button" text="Register" style="primary" />
        </div>
        {/* <Button type="button" text="Forgot Password?" style="primary" /> */}
      </StyledLoginForm>

      {children}
    </StyledLoginSection>
  )
}
