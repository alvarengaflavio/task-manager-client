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

    case 'tasksList':
      return {
        ...state,
        tasksList: action.payload,
      }

    case 'isLogged':
      return {
        ...state,
        isLogged: action.payload,
      }

    case 'isLoading':
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
  tasksList: Task[]
  isLogged: boolean
  isLoading: boolean
}

export type TalespireAction =
  | ActionTheme
  | ActionStatusFilter
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

export type ActionTasksList = {
  type: 'tasksList'
  payload: Task[]
}

export type ActionIsLogged = {
  type: 'isLogged'
  payload: boolean
}

export type ActionIsLoading = {
  type: 'isLoading'
  payload: boolean
}
