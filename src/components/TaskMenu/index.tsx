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
      <input
        type="text"
        name="taskdescription"
        id="taskdescription"
        placeholder="task description"
      />
      <Button text="Create" type="submit" />

      <label>Filter </label>
      <select name="filter" id="filter">
        <option value="all">All</option>
        <option value="completed">Open</option>
        <option value="incomplete">In Progress</option>
        <option value="incomplete">Done</option>
      </select>
    </StyledTaskMenu>
  )
}

type Props = {}
