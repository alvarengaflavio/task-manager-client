import { createTask } from '@/contexts/talespire/TalespireActions'
import { CreateTaskPayload, Task } from '@/utils/types/tasks'
import { createTaskFormValidator } from '@/utils/validators.util'
import { useState } from 'react'
import { Button } from '../shared/Button'
import { ErrorList } from '../shared/ErrorList'
import { StyledTaskMenu } from './StyledTaskMenu'

export function TaskMenu({ updateTasksList }: Props) {
  const [createError, setCreateError] = useState<string[]>([])

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = e.currentTarget.taskname.value
    const description = e.currentTarget.taskdescription.value
    const payload: CreateTaskPayload = {
      title,
      description,
    }

    const errors: string[] = createTaskFormValidator(payload)

    if (errors.length > 0) {
      setCreateError(() => errors)
      setTimeout(() => setCreateError([]), 4000)
      return
    }

    e.currentTarget.taskname.value = ''
    e.currentTarget.taskdescription.value = ''

    const newTask = await createTask(payload)
    updateTasksList(newTask)
  }

  return (
    <StyledTaskMenu>
      <h4>Create new Task</h4>
      <form action="" method="post" onSubmit={handleCreate}>
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
      </form>

      {createError.length > 0 && <ErrorList errors={createError} />}
    </StyledTaskMenu>
  )
}

type Props = {
  updateTasksList: (task: Task) => Promise<void>
}
