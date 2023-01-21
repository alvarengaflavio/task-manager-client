import React, { useState } from 'react'

function FormExample({}: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form data
    let formErrors: Partial<FormData> = {}
    if (!formData.name) {
      formErrors.name = 'Name is required'
    }

    if (!formData.password) {
      formErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters'
    }
    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Confirm password is required'
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(formErrors)

    // If there are no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted!', formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </label>
      <br />
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default FormExample

type Props = {}

type FormData = {
  name: string
  password: string
  confirmPassword: string
}

type Errors = Partial<FormData>
