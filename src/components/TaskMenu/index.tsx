import { Button } from '../shared/Button'
import { StyledTaskMenu } from './StyledTaskMenu'

export function TaskMenu({}: Props) {
  return (
    <StyledTaskMenu>
      <h4>Create new Task</h4>
      <label htmlFor="taskname">Name</label>
      <input
        type="text"
        name="taskname"
        id="taskname"
        placeholder="task name"
      />
      <label htmlFor="taskdescription">Description</label>
      <textarea
        name="taskdescription"
        id="taskdescription"
        cols={50}
        rows={5}
        placeholder="task description"
        style={{ resize: 'none' }}
      />

      <Button text="Create" type="submit" />
    </StyledTaskMenu>
  )
}

type Props = {}
