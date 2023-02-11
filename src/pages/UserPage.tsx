import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { UserCard } from '@/components/shared/UserCard'
import { UserCardItem } from '@/components/shared/UserCard/UserCardItem'
import { ScreenWrapper } from '@/components/styles/StyledScreenWrapper'
import { loggedUser } from '@/contexts/talespire/TalespireActions'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { User } from '@/utils/types/user'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function UserPage({}: Props) {
  const navigate = useNavigate()

  const { isLoading, handleIsLogged, handleIsLoading } = useContext<GetUser>(
    TalespireContext as any
  )
  const [userItem, setUserItem] = useState<UserState>(InitialUser)
  const [mode, setMode] = useState<UserMode>('view')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) {
      handleIsLogged(false)
      navigate('/login')
      return
    }

    handleIsLogged(true)
    handleIsLoading(true)

    const getUser = async () => {
      const hasUser = await loggedUser().catch(() => {
        handleIsLogged(false)
        navigate('/login')
        return InitialUser
      })

      setUserItem(hasUser)
      handleIsLoading(false)
    }

    getUser()
  }, [])

  return (
    <ScreenWrapper>
      <Header />
      <UserCard>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <UserCardItem user={userItem} viewMode={mode} setMode={setMode} />
        )}
      </UserCard>

      <Footer />
    </ScreenWrapper>
  )
}

type Props = {}

type GetUser = {
  isLoading: boolean
  handleIsLogged: (isLogged: boolean) => void
  handleIsLoading: (isLoading: boolean) => void
}

interface UserState extends User {
  id: number
  username: string
  name: string
}

export type UserMode = 'view' | 'delete'

const InitialUser: UserState = {
  id: 0,
  username: '',
  name: '',
}
