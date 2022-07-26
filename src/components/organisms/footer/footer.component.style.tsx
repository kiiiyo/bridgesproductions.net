import {
  classnames,
  margin,
  width,
  maxWidth,
  display,
  textAlign,
  textColor,
  padding
} from 'tailwindcss-classnames'

export const footerContainer = classnames(width('w-full'))

export const footerInner = classnames(
  maxWidth('max-w-4xl'),
  margin('mx-auto'),
  padding('px-6')
)

export const footerLogoContainer = classnames(display('hidden', 'md:block'))

export const footerLogo = classnames(display('block'), width('w-32'))

export const footerLogoImage = classnames(width('w-full'))

export const footerCopyrightContainer = classnames(
  display('block'),
  textColor('text-white'),
  textAlign('text-center', 'md:text-left')
)
