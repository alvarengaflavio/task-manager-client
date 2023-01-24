import { Button } from '../Button'
import { StyledTaskFilter } from './StyledTaskFilter'

export function TaskFilter({}: Props) {
  return (
    <StyledTaskFilter>
      <Button text="All" />
      <Button text="Open" />
      <Button text="In Progress" />
      <Button text="Done" />
    </StyledTaskFilter>
  )
}

type Props = {}
