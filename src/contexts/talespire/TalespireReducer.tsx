import { StatusFilter } from '@/utils/types/tasks'

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

    default:
      return state
  }
}

export type TalespireState = {
  darkMode: boolean
  statusFilter: StatusFilter
}

export type TalespireAction = ActionTheme | ActionStatusFilter

export type ActionTheme = {
  type: 'darkMode'
  payload: boolean
}

export type ActionStatusFilter = {
  type: 'statusFilter'
  payload: StatusFilter
}
