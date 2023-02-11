import { deleteTask, updateTask } from '@/contexts/talespire/TalespireActions'
import { Mode } from '@/pages/TaskPage'
import { Task } from '@/utils/types/tasks'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { TaskCardItemStyle } from './TaskCardItemStyle'

export function TaskCardItem({ task, viewMode, setMode }: Props) {
  const navigate = useNavigate()
  const creationDate = new Date(task.createdAt).toUTCString()

  // submit form
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const data: Partial<Task> = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: formData.get('status') as unknown as Task['status'],
    }

    const compareTask = { ...task, ...data }

    if (JSON.stringify(compareTask) === JSON.stringify(task)) {
      setMode('view')
      return
    }
    data.id = task.id
    await updateTask(data)
    window.location.reload()
  }

  const handleDelete = async () => {
    await deleteTask(task.id)
    navigate('/home')
  }

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <TaskCardItemStyle>
      <Button text="BACK" handleClick={handleBack} className={'btn--back'} />

      {viewMode !== 'edit' && (
        <div className="text--wrapper">
          <div>
            <label>Title</label>
            <h4>{task.title}</h4>
          </div>
          <div>
            <label>Description</label>
            <p>{task.description}</p>
          </div>
          <div>
            <label>Status</label>
            <p>{task.status}</p>
          </div>
          <div>
            <label>Created at:</label>
            <p>{`${creationDate.substring(0, creationDate.length - 4)}`}</p>
          </div>
        </div>
      )}

      {viewMode === 'edit' && (
        <div className="text--wrapper form--wrapper">
          <form onSubmit={handleUpdate} name="edit-form">
            <div>
              <label>Title</label>
              <input type="text" name="title" defaultValue={task.title} />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                defaultValue={task.description}
                className="input--description"
              />
            </div>
            <div>
              <label>Status</label>
              <select name="status" defaultValue={task.status}>
                <option value="OPEN">OPEN</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
            </div>
            <div className="btn--wrapper">
              <Button text="UPDATE" type="submit" />
              <Button
                text="CANCEL"
                style="secondary"
                handleClick={() => setMode('view')}
              />
            </div>
          </form>
        </div>
      )}

      {viewMode === 'view' && (
        <div className="btn--wrapper">
          <Button text="EDIT" handleClick={() => setMode('edit')} />
          <Button
            text="DELETE"
            style="secondary"
            handleClick={() => setMode('delete')}
          />
        </div>
      )}

      {viewMode === 'delete' && (
        <div className="btn--wrapper">
          <Button text="CANCEL" handleClick={() => setMode('view')} />
          <Button text="CONFIRM" handleClick={handleDelete} style="secondary" />
        </div>
      )}
    </TaskCardItemStyle>
  )
}

type Props = {
  task: TaskState
  viewMode: Mode
  setMode: (mode: Mode) => void
}

interface TaskState extends Task {
  userId?: number
}
