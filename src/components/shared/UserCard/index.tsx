import { UserCardWrapper } from './UserCardWrapper'

export function UserCard({ children }: Props) {
  return <UserCardWrapper>{children}</UserCardWrapper>
}

type Props = {
  children?: React.ReactNode
}
