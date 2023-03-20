import { ComponentProps } from "@stitches/react"
import { ReactNode } from "react"
import { theme } from "../../../../stitches.config"
import { Container } from "./styles"

type ActionIconProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  iconColor: keyof typeof theme.colors
}

export const ActionIcon = ({ icon, iconColor, ...props }: ActionIconProps) => {
  return (
    <Container {...props} css={{
      color: `$${iconColor}`,
    }}>
      {icon}
    </Container>
  )
}