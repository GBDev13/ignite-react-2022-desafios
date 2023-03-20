import { Sidebar } from "@/components/Sidebar"
import Head from "next/head"
import { ReactNode } from "react"
import { Container, Content } from "./styles"

type DefaultLayoutProps = {
  children: ReactNode
  title: string;
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <Sidebar />
      <Content>
        {children}
      </Content>
    </Container>
  )
}