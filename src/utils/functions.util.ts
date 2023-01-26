import { Task } from './types/tasks'

export const doubleDigit = (num: number) => (num < 10 ? `0${num}` : num)

export const getOrderedTasks = (tasks: Task[]): Task[] => {
  // Sort tasks by status and then by date
  return tasks.sort((a, b) => {
    if (a.status === b.status) {
      return a.createdAt > b.createdAt ? -1 : 1
    }

    return a.status > b.status ? -1 : 1
  })

  // Sort tasks by status and then by date
}
