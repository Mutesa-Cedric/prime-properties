import '../styles/globals.css'
import App, { AppProps, AppContext, AppInitialProps } from 'next/app'
import { NextComponentType } from "next"
import MainLayout from '../layouts/MainLayout'
import { AuthProvider } from '../hooks/useAuth';
import InnerPageLayout from '../layouts/InnerPageLayout'
import { RecoilRoot } from "recoil";
import Router from "next/router";
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css' //styles of nprogress
import { Agency, Agent, AppData, Blog, FAQ, Plan, Property, Service, Testimonial } from '../@types/types';
import sanityClient from "../lib/sanity";
import { agenciesQuery, agentsQuery, blogsQuery, faqsQuery, plansQuery, propertiesQuery, servicesQuery, testimonialsQuery } from "../utils/queries";



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
  data: AppData
};


function MyApp({ Component, pageProps, data }: MyAppProps) {
  return (
    <RecoilRoot>
      {/* <DataProvider> */}
      <AuthProvider>
        <MainLayout isHome={Component.isHome || false}>
          {
            Component.innerPage ?
              <InnerPageLayout pageTitle={Component.title!}>
                <Component {...pageProps} {...data} />
              </InnerPageLayout> :
              <Component {...pageProps} />
          }
        </MainLayout>
      </AuthProvider>
      {/* </DataProvider> */}
    </RecoilRoot>
  )
}

MyApp.getInitialProps = async (appContext: AppContext): Promise<AppData & AppInitialProps> => {
  const appProps = await App.getInitialProps(appContext);
  const properties = await sanityClient.fetch<Property[]>(propertiesQuery);
  const blogs = await sanityClient.fetch<Blog[]>(blogsQuery);
  const agents = await sanityClient.fetch<Agent[]>(agentsQuery);
  const agencies = await sanityClient.fetch<Agency[]>(agenciesQuery);
  const services = await sanityClient.fetch<Service[]>(servicesQuery);
  const plans = await sanityClient.fetch<Plan[]>(plansQuery);
  const testimonials = await sanityClient.fetch<Testimonial[]>(testimonialsQuery)
  const faqs = await sanityClient.fetch<FAQ[]>(faqsQuery);


  const data: AppData = {
    properties: properties,
    blogs: blogs,
    agents: agents,
    agencies: agencies,
    services: services,
    plans: plans,
    testimonials: testimonials,
    faqs: faqs,
  }

  return {
    ...appProps,
    ...data
  };
}


export default MyApp;