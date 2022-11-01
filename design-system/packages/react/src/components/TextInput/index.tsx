import { ComponentProps } from '../../types/ComponentProps'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
