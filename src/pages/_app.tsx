import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import { AuthProvider } from '../hooks/useAuth';
import InnerPageLayout from '../layouts/InnerPageLayout'
import { RecoilRoot } from "recoil";
// import { DataProvider } from '../hooks/useData';

function MyApp({ Component, pageProps }: { Component: any, pageProps: AppProps }) {
  return (

    <RecoilRoot>
      {/* <DataProvider> */}
      <AuthProvider>
        <MainLayout isHome={Component.isHome || false}>
          {
            Component.innerPage ?
              <InnerPageLayout pageTitle={Component.title}>
                <Component {...pageProps} />
              </InnerPageLayout> :
              <Component {...pageProps} />
          }
        </MainLayout>
      </AuthProvider>
      {/* </DataProvider> */}
    </RecoilRoot>

  )
}

export default MyApp;