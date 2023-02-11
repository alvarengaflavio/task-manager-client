import { register } from '@/contexts/talespire/TalespireActions'
import { registerFormValidator } from '@/utils/validators.util'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock, MdRemoveRedEye } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../shared/Button'
import { ErrorList } from '../shared/ErrorList'
import { StyledRegisterForm, StyledRegisterSection } from './StyledRegisterForm'

export function RegisterForm({ children }: Props) {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [errorState, setErrorState] = useState<string[]>([])

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

    const errorsList = registerFormValidator(
      username,
      password,
      confirmPassword
    )

    if (errorsList.length > 0) {
      // console.log('errorsList', errorsList)
      setErrorState(() => errorsList)
      return
    }

    const response = await register({ username, password })
    setErrorState(() => response)

    if (errorState[0] === 'User successfully created') {
      navigate('/home')
    }
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

        <div className="form-wrapper">
          <div>
            <MdLock size={24} />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirm-password"
            id="confirm-password"
            placeholder="confirm password"
          />
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

        {errorState.length > 0 && <ErrorList errors={errorState} />}
      </StyledRegisterForm>

      {children}
    </StyledRegisterSection>
  )
}

type Props = {
  children?: React.ReactNode
}
