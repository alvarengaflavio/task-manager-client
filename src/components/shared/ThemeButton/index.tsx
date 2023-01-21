import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import {
  TalespireAction,
  TalespireState,
} from '@/contexts/talespire/TalespireReducer'
import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { StyledDarkButton, StyledLightButton } from './StyledThemeButton'

type Props = {}

export function ThemeButton({}: Props) {
  const { darkMode, dispatch } = useContext<{
    darkMode: Partial<TalespireState>
    dispatch: React.Dispatch<TalespireAction>
  }>(TalespireContext as any)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !darkMode })
    console.log('Dark Mode: ', darkMode)
  }

  if (darkMode) {
    return (
      <StyledDarkButton onClick={handleDarkMode}>
        <MdDarkMode size={25} />
      </StyledDarkButton>
    )
  }

  return (
    <StyledLightButton onClick={handleDarkMode}>
      <MdLightMode size={25} />
    </StyledLightButton>
  )
}
