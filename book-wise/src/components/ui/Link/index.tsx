import { Container } from "./styles"
import { CaretRight, CaretLeft } from "@phosphor-icons/react"
import { ComponentProps } from "@stitches/react"

type LinkProps = Omit<ComponentProps<typeof Container>, 'href'> & {
  text: string
  href?: string
  onClick?: () => void
  withoutIcon?: boolean
}

export const Link = ({ text, href, onClick, iconSide = "right", withoutIcon, ...props }: LinkProps) => {
  return (
    <Container {...props} href={href!} iconSide={iconSide} onClick={onClick} as={onClick ? "button" : undefined}>
      {text}
      {!withoutIcon && (iconSide === "right" ? <CaretRight /> : <CaretLeft />)}
    </Container>
  )
}