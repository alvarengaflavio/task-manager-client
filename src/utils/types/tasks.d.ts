export type Task = {
  id: number
  title: string
  description: string
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE'
  createdAt: string
}
