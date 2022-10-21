import '../styles/globals.css'
import  { AppProps } from 'next/app'
import { NextComponentType } from "next"
import MainLayout from '../layouts/MainLayout'
import { AuthProvider } from '../hooks/useAuth';
import InnerPageLayout from '../layouts/InnerPageLayout'
import { RecoilRoot } from "recoil";
import Router from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css' //styles of nprogress
import { ToastContainer } from 'react-toastify';

NProgress.configure({
  showSpinner: false,
});

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// creatint custom appProps type from AppProps


type MyAppProps = AppProps & {
  Component: NextComponentType & {
    isHome?: boolean,
    innerPage?: boolean,
    title?: string
  },
};


function MyApp({ Component, pageProps }: MyAppProps) {
  // console.log(data)
  return (
    <RecoilRoot>
      {/* <DataProvider> */}
      <AuthProvider>
        <MainLayout isHome={Component.isHome || false}>
          <ToastContainer/>
          {
            Component.innerPage ?
              <InnerPageLayout pageTitle={Component.title!}>
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