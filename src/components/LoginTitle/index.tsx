import { StyledLoginTitle } from './StyleLoginTitle'

type Props = {}

export function LoginTitle({}: Props) {
  return (
    <StyledLoginTitle>
      <div>
        <h2>Task Manager</h2>
        <h4>
          Manage your tasks with customizable cards in three different progress
          stages.
        </h4>
      </div>
    </StyledLoginTitle>
  )
}
