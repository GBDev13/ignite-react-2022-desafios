import { User } from 'phosphor-react'
import { ComponentProps } from '../../types/ComponentProps'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
