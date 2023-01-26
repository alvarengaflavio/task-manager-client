import { doubleDigit } from '@/utils/functions.util'
import { Task, TaskStatus } from '@/utils/types/tasks'
import { useState } from 'react'
import { StyledTaskItem } from './StyledTaskItem'

export function TaskItem(props: Props) {
  const [status, setStatus] = useState<TaskStatus>(props.status)
  const date = new Date(props.createdAt)

  const showDate = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  const showTime = `${date.getHours()}:${doubleDigit(date.getMinutes())}`

  const handleStatus = (status: TaskStatus) => {
    setStatus(status)
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
          onClick={() => handleStatus('OPEN')}
          className={status === 'OPEN' ? 'active' : ''}
        >
          O
        </button>
        <button
          onClick={() => handleStatus('IN_PROGRESS')}
          className={status === 'IN_PROGRESS' ? 'active' : ''}
        >
          P
        </button>
        <button
          onClick={() => handleStatus('DONE')}
          className={status === 'DONE' ? 'active' : ''}
        >
          D
        </button>
      </div>
    </StyledTaskItem>
  )
}

type Props = Task
