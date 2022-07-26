import {
  classnames,
  margin,
  width,
  container,
  display,
  textAlign,
  textColor,
  height
} from 'tailwindcss-classnames'

export const footerContainer = classnames(width('w-full'))

export const footerInner = classnames(container('container'), margin('mx-auto'))

export const footerLogoContainer = classnames(display('hidden', 'md:block'))

export const footerLogo = classnames(display('block'), width('w-40'))

export const footerLogoImage = classnames(width('w-full'))

export const footerCopyrightContainer = classnames(
  display('block'),
  textColor('text-white'),
  textAlign('text-center', 'md:text-left')
)
