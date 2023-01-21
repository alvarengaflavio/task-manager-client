import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1'

export const fetchData = async (url: string) => {
  try {
    const token = localStorage.getItem('jwt')
    const headers = { Authorization: `Bearer ${token}` }
    const response = await axios.get(url, { headers })

    return response.data
  } catch (err) {
    console.log(err)
  }
}

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      // Redirecione o usuário para a página de login ou mostre uma mensagem de erro
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)
