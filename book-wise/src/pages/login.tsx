import { LogoContainer, LogoSection, WelcomeSection } from "@/styles/pages/login";
import { Heading, Text } from "@/components/Typography";
import Head from "next/head";
import { AuthButtons } from "@/components/AuthButtons";

export default function Login() {
  return (
    <LogoContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <LogoSection>
        <img src="/images/logo.svg" alt="BookWise Logo" />
      </LogoSection>     
      <WelcomeSection>
        <Heading size="lg" color="gray-100">Boas vindas!</Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>

        <AuthButtons canGuest />
      </WelcomeSection> 
    </LogoContainer>
  )
}
