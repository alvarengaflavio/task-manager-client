import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
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
  }
)
