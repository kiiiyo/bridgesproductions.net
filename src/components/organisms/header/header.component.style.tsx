import {
  classnames,
  margin,
  width,
  maxWidth,
  display,
  height,
  justifyContent,
  alignItems,
  padding
} from 'tailwindcss-classnames'

export const headerContainer = classnames(width('w-full'))

export const headerInner = classnames(
  maxWidth('max-w-4xl'),
  margin('mx-auto'),
  padding('px-6')
)

export const headerLogo = classnames(
  display('flex'),
  height('h-20'),
  justifyContent('justify-between'),
  alignItems('items-center')
)

export const headerLogoInner = classnames(
  display('block'),
  width('w-40', 'md:w-48')
)

export const headerLogoImage = classnames(width('w-full'))
