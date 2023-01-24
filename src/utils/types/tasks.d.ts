export type Task = {
  id: number
  title: string
  description: string
  status: TaskStatus
  createdAt: string
}

export type StatusFilter = 'ALL' | 'OPEN' | 'IN_PROGRESS' | 'DONE'

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE'
