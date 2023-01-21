import { ThemeButton } from '../shared/ThemeButton'
import { HeaderSection } from './StyledHeader'

type Props = {}

export function Header({}: Props) {
  return (
    <HeaderSection>
      <div className="title">
        <h1>Talespire Cards</h1>
      </div>
      <div className="theme">
        <ThemeButton />
      </div>
    </HeaderSection>
  )
}
