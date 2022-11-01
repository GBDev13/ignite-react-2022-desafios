import { ComponentProps as CP } from '@stitches/react'
import { ElementType } from 'react'

export type ComponentProps<T> = CP<T> & {
  as: ElementType
}
