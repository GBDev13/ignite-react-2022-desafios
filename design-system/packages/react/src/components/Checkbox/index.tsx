import { Check } from 'phosphor-react'
import { ComponentProps } from '../../types/ComponentProps'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
