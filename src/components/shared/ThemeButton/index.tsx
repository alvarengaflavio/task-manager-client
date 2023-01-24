import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { StyledDarkButton, StyledLightButton } from './StyledThemeButton'

export function ThemeButton({}: Props) {
  const { darkMode, handleDarkMode } = useContext<ThisState>(
    TalespireContext as any
  )

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

type Props = {}

type ThisState = {
  darkMode: boolean
  handleDarkMode: () => void
}
