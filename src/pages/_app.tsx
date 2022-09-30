import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import { AuthProvider } from '../hooks/useAuth'
import InnerPageLayout from '../layouts/InnerPageLayout'

function MyApp({ Component, pageProps }: { Component: any, pageProps: AppProps }) {
  return (
    <AuthProvider>
      <MainLayout>
        {
          Component.innerPage ?
            <InnerPageLayout pageTitle={Component.title}>
              <Component {...pageProps} />
            </InnerPageLayout> :
            <Component {...pageProps} />
        }
      </MainLayout>
    </AuthProvider>

  )
}

export default MyApp
