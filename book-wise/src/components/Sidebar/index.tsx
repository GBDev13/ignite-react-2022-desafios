import { Container, LoginButton, UserDetails } from "./styles"
import { SignIn, SignOut } from "@phosphor-icons/react"
import { Navigation } from "../Navigation"
import { signOut, useSession } from "next-auth/react"
import { Avatar } from "../ui/Avatar"
import { Text } from "../Typography"
import { useRouter } from "next/router"

export const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }
  
  return (
    <Container>
      <div>
        <img className="logo" src="/images/logo.svg" alt="BookWise Logo" />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login
            <SignIn size={20} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar size="sm" src={user?.avatar_url} alt={user?.name} onClick={handleOpenProfile} css={{ cursor: "pointer" }} />
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}