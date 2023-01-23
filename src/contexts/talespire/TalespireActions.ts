import { LoginPayload } from '@/utils/types/payloads'
import axios from 'axios'

axios.defaults.baseURL =
  'http://taskmanager-alva.sa-east-1.elasticbeanstalk.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },

  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (config) => {
    return config
  },
  (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken')
      }
      // Redirecione o usuário para a página de login ou mostre uma mensagem de erro
      window.location.href = '/login'
      throw new Error(err.response.data.message)
    }

    return err?.response
  }
)

export const login = async ({ username, password }: LoginPayload) => {
  try {
    const response = await axios
      .post('/auth/signin', { username, password })
      .catch((err) => err)

    if (response?.status === 201) {
      localStorage.setItem('accessToken', response.data.accessToken)

      return []
    }

    if (response?.data?.message === 'Invalid credentials') {
      return ['Incorrect username or password']
    }

    return ['Something went wrong']
  } catch (err: any) {
    return ['Something went wrong']
  }
}

export const register = async ({
  username,
  password,
}: LoginPayload): Promise<string[]> => {
  try {
    const response = await axios
      .post('/auth/signup', { username, password })
      .catch((err) => err)

    if (response?.status === 201) {
      return ['User successfully created']
    }

    if (response?.status === 400) {
      return [response?.data?.message]
    }

    if (response?.status === 409) {
      return [response?.data?.message]
    }

    return ['Something went wrong']
  } catch (err: any) {
    return ['Something went wrong']
  }
}
