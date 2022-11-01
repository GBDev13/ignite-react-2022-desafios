import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { ComponentProps } from '../../types/ComponentProps'
import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
