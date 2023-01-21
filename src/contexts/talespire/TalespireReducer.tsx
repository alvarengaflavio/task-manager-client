export type TalespireState = {
  darkMode: boolean
}

export type TalespireAction = {
  type: 'darkMode'
  payload: boolean
}

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

    default:
      return state
  }
}
