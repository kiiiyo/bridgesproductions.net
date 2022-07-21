import {
  classnames,
  margin,
  width,
  container,
  display,
  height,
  justifyContent,
  alignItems
} from 'tailwindcss-classnames'

export const headerContainer = classnames(width('w-full'))

export const headerInner = classnames(container(), margin('mx-auto'))

export const headerLogo = classnames(
  display('flex'),
  height('h-20'),
  justifyContent('justify-between'),
  alignItems('items-center')
)

export const headerLogoInner = classnames(display('block'), width('w-48'))

export const headerLogoImage = classnames(width('w-full'))
