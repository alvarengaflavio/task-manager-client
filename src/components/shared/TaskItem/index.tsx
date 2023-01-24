import { Task } from '@/utils/types/tasks'
import { StyledTaskItem } from './StyledTaskItem'

export function TaskItem(props: Props) {
  return (
    <StyledTaskItem>
      <p>{props.status}</p>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p>{props.createdAt}</p>
    </StyledTaskItem>
  )
}

type Props = Task
