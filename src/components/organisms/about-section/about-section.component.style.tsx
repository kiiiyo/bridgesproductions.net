import {
  classnames,
  padding,
  margin,
  textAlign,
  fontWeight,
  fontSize,
  textColor,
  display,
  justifyContent,
  width,
  maxWidth,
  lineHeight
} from 'tailwindcss-classnames'

export const sectionContainer = classnames()

export const sectionInner = classnames(
  maxWidth('max-w-4xl'),
  padding('py-8', 'px-6', 'md:py-16'),
  margin('mx-auto')
)

export const sectionHeader = classnames(margin('mb-8', 'md:mb-16'))

export const sectionHeaderTitle = classnames(
  textColor('text-white'),
  fontSize('text-xl', 'md:text-4xl'),
  textAlign('text-center'),
  fontWeight('font-bold')
)

export const sectionBody = classnames()

/**
 * List Style
 */

export const listContainer = classnames()

export const listItem = classnames(
  display('block', 'md:flex'),
  padding('py-4', 'md:py-6'),
  justifyContent('md:justify-start')
)

export const listItemTitle = classnames(
  textColor('text-white'),
  fontWeight('font-bold'),
  width('w-full', 'md:w-40'),
  margin('mb-2', 'md:mb-0')
)

export const listItemDescription = classnames(
  textColor('text-white'),
  lineHeight('leading-8')
)
