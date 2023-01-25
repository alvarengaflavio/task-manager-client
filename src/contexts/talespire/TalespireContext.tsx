import { StatusFilter, Task } from '@/utils/types/tasks'
import { createContext, useReducer } from 'react'
import { getTasks } from './TalespireActions'
import { talespireReducer, TalespireState } from './TalespireReducer'

export const TalespireContext = createContext({})

export const TalespireProvider = ({ children }: any) => {
  const initialState: TalespireState = {
    darkMode: true,
    statusFilter: 'ALL',
    tasksList: [],
    isLogged: false,
    isLoading: true,
  }

  const [state, dispatch] = useReducer(talespireReducer, initialState)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !state.darkMode })
  }

  const handleStatusFilter = (status: StatusFilter) => {
    dispatch({ type: 'statusFilter', payload: status })
  }

  const getTasksList = async (filter: StatusFilter) => {
    const tasksList = await getTasks(filter)

    dispatch({ type: 'tasksList', payload: tasksList })

    return tasksList
  }

  const setTasksList = async (TasksListPayload: Task[]) => {
    dispatch({ type: 'tasksList', payload: TasksListPayload })
  }

  const handleIsLogged = (isLogged: boolean) => {
    dispatch({ type: 'isLogged', payload: isLogged })
  }

  const handleIsLoading = (isLoading: boolean) => {
    dispatch({ type: 'isLoading', payload: isLoading })
  }

  return (
    <TalespireContext.Provider
      value={{
        ...state,
        handleDarkMode,
        handleStatusFilter,
        getTasksList,
        setTasksList,
        handleIsLogged,
        handleIsLoading,
      }}
    >
      {children}
    </TalespireContext.Provider>
  )
}
