export const registerFormValidator = (
  username: string,
  password: string,
  confirmPassword: string
) => {
  const errors: string[] = []

  if (!username || !password || !confirmPassword) {
    errors.push('Please fill all fields')
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match')
  }

  validadeUsername(username, errors)
  validatePassword(password, errors)

  return errors
}

export const loginFormValidator = (username: string, password: string) => {
  const errors: string[] = []

  if (!username || !password) {
    errors.push('Please fill all fields')
  }

  validadeUsername(username, errors)
  validatePassword(password, errors)

  return errors
}

const validadeUsername = (username: string, errors: string[]) => {
  if (username.length < 3) {
    errors.push('Username must be at least 3 characters long')
    return
  }

  if (!username.match(/^[A-Za-z0-9]{1,20}$/)) {
    errors.push('Username must contain only letters and numbers')
  }

  if (username.match(/^[0-9]+$/)) {
    errors.push('Username must contain at least one letter')
  }
}

const validatePassword = (password: string, errors: string[]) => {
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }

  if (
    !password.match(
      /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
    )
  ) {
    errors.push(
      'Password must contain one uppercase letter, one lowercase letter, one number and one special character'
    )
  }
}
