import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { TalespireState } from '@/contexts/talespire/TalespireReducer'

type Props = {
  children: React.ReactNode
}

export function ThemeProviderReducer({ children }: Props) {
  const { darkMode } = useContext<Partial<TalespireState>>(
    TalespireContext as React.Context<{}>
  )

  if (darkMode) {
    return (
      <ThemeProvider
        theme={{
          colors: {
            primary: '#fff',
            secondary: '#afbec4',

            background: '#242424',
            backgroundVar: '#374850',

            buttonPrimary: '#fff',
            buttonSecondary: '#242424',

            interactive: '#026ebe',
            inlineError: '#fff',
          },
          fonts: {
            primary: 'Inter, sans-serif',
          },
        }}
      >
        {children}
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: '#242424',
          secondary: '#445a63',

          background: '#fff',
          backgroundVar: '#d0d8dc',

          buttonPrimary: '#242424',
          buttonSecondary: '#fff',

          interactive: '#026ebe',
          inlineError: '#c00300',
        },
        fonts: {
          primary: 'Inter, sans-serif',
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}
