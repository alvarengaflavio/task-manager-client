import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoginForm } from '@/components/LoginForm'
import { LoginTitle } from '@/components/LoginTitle'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import {
  TalespireAction,
  TalespireState,
} from '@/contexts/talespire/TalespireReducer'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginPage({}: Props) {
  const navigate = useNavigate()
  const { isLogged, handleIsLogged } = useContext<{
    isLogged: Partial<TalespireState>
    handleIsLogged: (isLogged: boolean) => void
  }>(TalespireContext as any)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      handleIsLogged(true)
      navigate('/home')
      return
    }

    document.title = 'Login'
  }, [isLogged])

  return (
    <>
      <ScreenWrapper>
        <Header />

        <LoginTitle />
        <LoginForm />

        <Footer />
      </ScreenWrapper>
    </>
  )
}

type Props = {}
