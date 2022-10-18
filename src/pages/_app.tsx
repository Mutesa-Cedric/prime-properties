import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import { AuthProvider } from '../hooks/useAuth';
import InnerPageLayout from '../layouts/InnerPageLayout'
import { RecoilRoot } from "recoil";
import Router from "next/router";
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css' //styles of nprogress
// import { DataProvider } from '../hooks/useData';

NProgress.configure({
  showSpinner: false,
});

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

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