import { createTask } from '@/contexts/talespire/TalespireActions'
import { CreateTaskPayload, Task } from '@/utils/types/tasks'
import { createTaskFormValidator } from '@/utils/validators.util'
import { useState } from 'react'
import { Button } from '../shared/Button'
import { ErrorList } from '../shared/ErrorList'
import { ErrorWrapper, StyledTaskMenu } from './StyledTaskMenu'

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

    const newTask = await createTask(payload) // create the task on the server
    updateTasksList(newTask) // update the task list on the client
  }

  return (
    <>
      <ErrorWrapper>
        {createError.length > 0 && <ErrorList errors={createError} />}
      </ErrorWrapper>
      <StyledTaskMenu>
        <h4>Create new Task</h4>
        <form action="" method="post" onSubmit={handleCreate}>
          <div>
            <label htmlFor="taskname">Name</label>
            <input
              type="text"
              name="taskname"
              id="taskname"
              placeholder="task name"
            />
          </div>
          <div>
            <label htmlFor="taskdescription">Description</label>
            <input
              type="text"
              name="taskdescription"
              id="taskdescription"
              placeholder="task description"
            />
          </div>

          <Button text="Create Task" type="submit" />
        </form>
      </StyledTaskMenu>
    </>
  )
}

type Props = {
  updateTasksList: (task: Task) => Promise<void>
}
