import { getOrderedTasks } from '@/utils/functions.util'
import { LoginPayload } from '@/utils/types/payloads'
import { CreateTaskPayload, StatusFilter, Task } from '@/utils/types/tasks'
import { User } from '@/utils/types/user'
import axios from 'axios'

axios.defaults.baseURL = 'https://web-production-b2fc.up.railway.app/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['Access-Control-Allow-Credentials'] = true
axios.defaults.headers['Access-Control-Allow-Origin'] =
  'https://task-manager-ashen-eight.vercel.app'
axios.defaults.headers['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,DELETE,PATCH,OPTIONS'
axios.defaults.headers['Access-Control-Allow-Headers'] =
  'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

let retryCount = 0

axios.interceptors.response.use(
  (response) => {
    retryCount = 0
    return response
  },
  (error) => {
    const { status } = error.response
    const isTokenError = [401, 403].includes(status)

    if (isTokenError) {
      if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken')
      }
      // Show error message or notification to user
      console.error(error.response.data.message)
    }

    if (!isTokenError && retryCount < 3) {
      retryCount += 1
      return axios.request(error.config)
    }

    return Promise.reject(error)
  }
)

/*
 * AUTH ACTIONS *
 */
export const login = async ({ username, password }: LoginPayload) => {
  try {
    const response = await axios
      .post('/auth/signin', { username, password })
      .catch((err) => err)

    if (response?.status === 201) {
      localStorage.setItem('accessToken', response.data.accessToken)

      return ['Success']
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

export const loggedUser = async (): Promise<User> => {
  try {
    const response = await axios.get('/auth/signed')

    return response.data
  } catch (err: any) {
    console.log(err)
    return {} as User
  }
}

export const updateName = async (name: string): Promise<void> => {
  try {
    await axios.patch('/auth/update', { name })
  } catch (err: any) {
    console.log(err)
  }
}

export const deleteUser = async (): Promise<void> => {
  try {
    await axios.delete('/auth')
  } catch (err: any) {
    console.log(err)
  }
}

/*
 * TASK ACTIONS *
 */

export const getTasks = async (
  statusFilter: StatusFilter,
  textFilter: string
): Promise<Task[]> => {
  try {
    let queryBuilder = ''

    if (statusFilter !== 'ALL') {
      queryBuilder = `?status=${statusFilter}`
      if (textFilter) queryBuilder += `&search=${textFilter}`
    } else if (textFilter) queryBuilder = `?search=${textFilter}`

    const response = await axios.get('/tasks' + queryBuilder)

    if (response.data.length === 0) return []

    const tasks = getOrderedTasks(response.data)

    return tasks
  } catch (err: any) {
    console.log(err)
    return []
  }
}

export const createTask = async (task: CreateTaskPayload): Promise<Task> => {
  try {
    const response = await axios.post('/tasks', task)

    return response.data
  } catch (err: any) {
    console.log(err)
    return {} as Task
  }
}

export const updateTaskStatus = async (
  id: number,
  status: StatusFilter
): Promise<Task> => {
  try {
    const response = await axios.patch(`/tasks/${id}/status`, { status })

    return response.data
  } catch (err: any) {
    console.log(err)
    return {} as Task
  }
}

export const getTaskById = async (id: number): Promise<Task> => {
  try {
    const response = await axios.get(`/tasks/${id}`)

    return response.data
  } catch (err: any) {
    console.log(err)
    return {} as Task
  }
}

export const updateTask = async (task: Partial<Task>): Promise<Task> => {
  try {
    const response = await axios.patch(`/tasks/${task.id}`, task)

    return response.data
  } catch (err: any) {
    console.log(err)
    return {} as Task
  }
}

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/tasks/${id}`)
  } catch (err: any) {
    console.log(err)
  }
}
