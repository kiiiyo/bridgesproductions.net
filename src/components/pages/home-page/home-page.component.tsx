import { Organisms, Templates } from '@/components'

export type Props = {}

export const HomePage = ({}: Props) => {
  return (
    <Templates.GenericTemplate
      header={<Organisms.Header />}
      content={
        <>
          <Organisms.HeroSection />
          <Organisms.AboutSection />
        </>
      }
      footer={<Organisms.Footer />}
    />
  )
}
