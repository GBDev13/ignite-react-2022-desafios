import { ComponentProps } from "@stitches/react"
import { ReactNode } from "react"
import { Container } from "./styles"

type TagProps = ComponentProps<typeof Container> & {
  children: ReactNode
  active?: boolean
}

export const Tag = ({ children, active, ...props }: TagProps) => {
  return (
    <Container active={active} {...props}>
      {children}
    </Container>
  )
}