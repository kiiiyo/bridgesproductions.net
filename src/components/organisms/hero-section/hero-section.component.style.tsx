import {
  classnames,
  padding,
  margin,
  textAlign,
  fontWeight,
  fontSize,
  textColor,
  maxWidth
} from 'tailwindcss-classnames'

export const sectionContainer = classnames()

export const sectionInner = classnames(
  maxWidth('max-w-4xl'),
  padding('py-8', 'px-6', 'md:py-16'),
  margin('mx-auto')
)

export const sectionHeader = classnames(margin('mb-8', 'md:mb-16'))

export const sectionHeaderTitle = classnames(
  margin('mt-2'),
  textColor('text-white'),
  fontSize('text-5xl', 'md:!text-8xl'),
  textAlign('text-center'),
  fontWeight('font-bold')
)

export const sectionHeaderSubTitle = classnames(
  textColor('text-white'),
  fontSize('text-sm', 'md:text-xl'),
  textAlign('text-center'),
  fontWeight('font-bold')
)

export const sectionBody = classnames()
