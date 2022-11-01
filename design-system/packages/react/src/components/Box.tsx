import { styled } from '../styles'
import { ComponentProps } from '../types/ComponentProps'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
