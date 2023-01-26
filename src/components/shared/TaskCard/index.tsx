import { TaskCardWrapper } from './TaskCardWrapper'

export function TaskCard({ children }: Props) {
  return <TaskCardWrapper>{children}</TaskCardWrapper>
}

type Props = {
  children?: React.ReactNode
}
