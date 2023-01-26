import { doubleDigit } from '@/utils/functions.util'
import { Task } from '@/utils/types/tasks'
import { StyledTaskItem } from './StyledTaskItem'

export function TaskItem(props: Props) {
  const date = new Date(props.createdAt)

  const showDate = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  const showTime = `${date.getHours()}:${doubleDigit(date.getMinutes())}`

  return (
    <StyledTaskItem>
      <p>{props.status}</p>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p>{`${showDate} - ${showTime}`}</p>
    </StyledTaskItem>
  )
}

type Props = Task
