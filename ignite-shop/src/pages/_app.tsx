import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { CartContextProvider } from "../contexts/CartContext";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
