import { createContext, useReducer } from 'react'
import { talespireReducer } from './TalespireReducer'

export const TalespireContext = createContext({})

export const TalespireProvider = ({ children }: any) => {
  const initialState = {
    darkMode: true,
  }

  const [state, dispatch] = useReducer(talespireReducer, initialState)

  return (
    <TalespireContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TalespireContext.Provider>
  )
}
