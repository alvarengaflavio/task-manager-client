import { StatusFilter, Task } from '@/utils/types/tasks'

export const talespireReducer = (
  state: TalespireState,
  action: TalespireAction
) => {
  switch (action.type) {
    case 'darkMode':
      return {
        ...state,
        darkMode: action.payload,
      }

    case 'statusFilter':
      return {
        ...state,
        statusFilter: action.payload,
      }

    case 'textFilter':
      return {
        ...state,
        textFilter: action.payload,
      }

    case 'tasksList':
      return {
        ...state,
        tasksList: action.payload,
        isLoading: false,
      }

    case 'isLogged':
      return {
        ...state,
        isLogged: action.payload,
      }

    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

export type TalespireState = {
  darkMode: boolean
  statusFilter: StatusFilter
  textFilter: string
  tasksList: Task[]
  isLogged: boolean
  isLoading: boolean
}

export type TalespireAction =
  | ActionTheme
  | ActionStatusFilter
  | ActionTextFilter
  | ActionTasksList
  | ActionIsLogged
  | ActionIsLoading

export type ActionTheme = {
  type: 'darkMode'
  payload: boolean
}

export type ActionStatusFilter = {
  type: 'statusFilter'
  payload: StatusFilter
}

export type ActionTextFilter = {
  type: 'textFilter'
  payload: string
}

export type ActionTasksList = {
  type: 'tasksList'
  payload: Task[]
}

export type ActionIsLogged = {
  type: 'isLogged'
  payload: boolean
}

export type ActionIsLoading = {
  type: 'setLoading'
  payload: boolean
}
