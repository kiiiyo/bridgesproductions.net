import { Organisms, Templates } from '@/components'

export type Props = {}

export const HomePage = ({}: Props) => {
  return (
    <Templates.GenericTemplate
      header={<Organisms.Header />}
      content={<div>content</div>}
      footer={<Organisms.Footer />}
    />
  )
}
