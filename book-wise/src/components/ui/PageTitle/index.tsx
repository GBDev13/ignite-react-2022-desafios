import { ComponentProps } from "@stitches/react"
import { ReactNode } from "react"
import { Heading } from "../../Typography"
import { Container } from "./styles"

type PageTitleProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  title: string
}

export const PageTitle = ({ title, icon, ...props }: PageTitleProps) => {
  return (
    <Container {...props}>
      {icon}
      <Heading size="lg">{title}</Heading>
    </Container>
  )
}