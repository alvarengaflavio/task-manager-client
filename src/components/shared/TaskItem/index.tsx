import { updateTaskStatus } from '@/contexts/talespire/TalespireActions'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { doubleDigit, getOrderedTasks } from '@/utils/functions.util'
import { Task, TaskStatus } from '@/utils/types/tasks'
import { useContext, useState } from 'react'
import { StyledTaskItem } from './StyledTaskItem'

export function TaskItem(props: Props) {
  const [status, setStatus] = useState<TaskStatus>(props.status)
  const { tasksList, setTasksList } = useContext<TaskItemStates>(
    TalespireContext as any
  )
  const date = new Date(props.createdAt)

  const showDate = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  const showTime = `${date.getHours()}:${doubleDigit(date.getMinutes())}`

  const handleStatus = async (status: TaskStatus, id: number) => {
    setStatus(status)

    await updateTaskStatus(id, status).catch((err) => {
      console.log(err)
      return
    }) // update task status in db
    const newTasksList = getOrderedTasks(
      tasksList?.map((task) => {
        if (task.id === id) {
          task.status = status
        }

        return task
      })
    )

    setTasksList(newTasksList) // update task status in context
  }

  return (
    <StyledTaskItem>
      <div className="text--wrapper">
        <h4>{props.title.toLocaleUpperCase()}</h4>
        <p>{props.description}</p>
        <p>{`${showDate} - ${showTime}`}</p>
      </div>

      <div className="status--wrapper">
        <button
          onClick={() => handleStatus('OPEN', props.id)}
          className={status === 'OPEN' ? 'active' : ''}
        >
          O
        </button>
        <button
          onClick={() => handleStatus('IN_PROGRESS', props.id)}
          className={status === 'IN_PROGRESS' ? 'active' : ''}
        >
          P
        </button>
        <button
          onClick={() => handleStatus('DONE', props.id)}
          className={status === 'DONE' ? 'active' : ''}
        >
          D
        </button>
      </div>
    </StyledTaskItem>
  )
}

type Props = Task

type TaskItemStates = {
  tasksList: Task[]
  setTasksList: (tasks: Task[]) => void
}
