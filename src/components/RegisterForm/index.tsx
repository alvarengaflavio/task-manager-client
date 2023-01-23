import { register } from '@/contexts/talespire/TalespireActions'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../shared/Button'
import { StyledRegisterForm, StyledRegisterSection } from './StyledRegisterForm'

type Props = {
  children?: React.ReactNode
}

export function RegisterForm({ children }: Props) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleBack = () => {
    navigate('/login')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const username = e.currentTarget.username.value
    const password = e.currentTarget.password.value
    const confirmPassword = e.currentTarget['confirm-password'].value

    if (username === '' || password === '' || confirmPassword === '') {
      return
    }

    if (password !== confirmPassword) {
      return
    }

    await register({ username, password })
  }

  return (
    <StyledRegisterSection>
      <StyledRegisterForm onSubmit={handleSubmit}>
        <p>Create your account</p>
        <div className="form-wrapper">
          <div>
            <FaUser size={24} />
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

        <div className="form-wrapper">
          <div>
            <MdLock size={24} />
            {/* <label htmlFor="inputPassword">PASSWORD</label> */}
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirm-password"
            id="confirm-password"
            placeholder="confirm password"
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
          <Button type="submit" text="Create" style="secondary" />
          <Button
            type="button"
            text="Back"
            style="primary"
            handleClick={handleBack}
          />
        </div>
        {/* <Button type="button" text="Forgot Password?" style="primary" /> */}
      </StyledRegisterForm>

      {children}
    </StyledRegisterSection>
  )
}
