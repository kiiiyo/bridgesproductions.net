import { mainContainer, mainInner } from './generic-template.style'

export type Props = {
  header?: any
  footer?: any
  content?: any
}

export const GenericTemplate = ({ header, footer, content }: Props) => {
  return (
    <div class={mainContainer}>
      {header}
      <main>
        <div class={mainInner}>{content}</div>
      </main>
      {footer}
    </div>
  )
}
