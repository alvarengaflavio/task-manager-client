import { StatusFilter } from '@/utils/types/tasks'
import { createContext, useReducer } from 'react'
import { talespireReducer, TalespireState } from './TalespireReducer'

export const TalespireContext = createContext({})

export const TalespireProvider = ({ children }: any) => {
  const initialState: TalespireState = {
    darkMode: true,
    statusFilter: 'ALL',
  }

  const [state, dispatch] = useReducer(talespireReducer, initialState)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !state.darkMode })
  }

  const handleStatusFilter = (status: StatusFilter) => {
    dispatch({ type: 'statusFilter', payload: status })
  }

  return (
    <TalespireContext.Provider
      value={{ ...state, handleDarkMode, handleStatusFilter }}
    >
      {children}
    </TalespireContext.Provider>
  )
}
