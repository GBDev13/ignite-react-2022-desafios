import { globalStyles } from '@/styles/global';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google'
import { ReactElement, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({ Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div
          className={`${nunito.className}`}
        >
          {getLayout(<Component {...pageProps} />)}
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}