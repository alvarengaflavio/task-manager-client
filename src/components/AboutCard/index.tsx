import { StyledAboutCard } from './StyledAboutCard'

type Props = {
  children: React.ReactNode
}

export function AboutCard({ children }: Props) {
  return (
    <StyledAboutCard>
      <h1>About Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam voluptatibus
        quos quas quidem nesciunt. Quisquam, quae.
      </p>
      {children}
    </StyledAboutCard>
  )
}
