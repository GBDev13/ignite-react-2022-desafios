import { Heading, Text } from "@/components/Typography"
import { ReactNode } from "react"
import { Container } from "./styles"

type BookInfoProps = {
  icon: ReactNode
  title: string
  info: string
}

export const BookInfo = ({ icon, title, info }: BookInfoProps) => {
  return (
    <Container>
      {icon}
      <div>
        <Text size="sm" color="gray-300">{title}</Text>
        <Heading size="sm" color="gray-200">{info}</Heading>
      </div>
    </Container>
  )
}