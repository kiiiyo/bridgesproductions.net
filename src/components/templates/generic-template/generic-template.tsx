export type Props = {
  header?: any
  footer?: any
  content?: any
}

export const GenericTemplate = ({ header, footer, content }: Props) => {
  return (
    <div class="flex overflow-hidden flex-col min-h-screen">
      {header}
      <main>
        <div class="mt-20 bg-gray-100 md:mt-32">{content}</div>
      </main>
      {footer}
    </div>
  )
}
