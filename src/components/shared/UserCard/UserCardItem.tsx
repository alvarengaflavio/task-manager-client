import { deleteUser, updateName } from '@/contexts/talespire/TalespireActions'
import { UserMode } from '@/pages/UserPage'
import { User } from '@/utils/types/user'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { UserCardItemStyle } from './UserCardItemStyle'

export function UserCardItem({ user, viewMode, setMode }: Props) {
  const navigate = useNavigate()

  // submit form
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string

    if (!name) return
    if (name === user.name) return

    await updateName(name).catch(() => {
      alert('Error updating name')
    })

    window.location.reload()
  }

  const handleDelete = async () => {
    await deleteUser().catch(() => {
      alert('Error deleting user')
    })

    navigate('/login')
  }

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <UserCardItemStyle>
      <Button text="BACK" handleClick={handleBack} className={'btn--back'} />

      <h4>User Settings</h4>

      <div className="text--wrapper form--wrapper">
        <form onSubmit={handleUpdate} name="edit-form">
          <div>
            <label>Username</label>
            <label className="label--username">{user.username}</label>
          </div>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="input--name"
              placeholder="Enter your name"
              defaultValue={user.name}
            />
          </div>

          {viewMode === 'view' && (
            <div className="btn--wrapper">
              <Button
                text="DELETE"
                style="secondary"
                handleClick={() => setMode('delete')}
              />
              <Button text="UPDATE" type="submit" />
            </div>
          )}

          {viewMode === 'delete' && (
            <div className="btn--wrapper">
              <Button text="CANCEL" handleClick={() => setMode('view')} />
              <Button
                text="CONFIRM"
                handleClick={handleDelete}
                style="secondary"
              />
            </div>
          )}
        </form>
      </div>
    </UserCardItemStyle>
  )
}

type Props = {
  user: UserState
  viewMode: UserMode
  setMode: (mode: UserMode) => void
}

interface UserState extends User {
  userId?: number
}
