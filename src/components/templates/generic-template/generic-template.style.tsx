import {
  classnames,
  display,
  overflow,
  flexDirection,
  minHeight,
  margin,
  padding
} from 'tailwindcss-classnames'

export const mainContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  overflow('overflow-hidden'),
  minHeight('min-h-full')
)

export const mainInner = classnames(padding('py-8'))
