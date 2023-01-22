import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const fetchData = async (url: string) => {
  try {
    const token = localStorage.getItem('accessToken')
    const headers = { Authorization: `Bearer ${token}` }
    const response = await axios.get(url, { headers })

    return response.data
  } catch (err) {
    console.log(err)
  }
}

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
