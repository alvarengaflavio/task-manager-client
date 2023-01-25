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

  return (
    <TalespireContext.Provider
      value={{
        ...state,
        handleDarkMode,
        handleStatusFilter,
        getTasksList,
        setTasksList,
      }}
    >
      {children}
    </TalespireContext.Provider>
  )
}
