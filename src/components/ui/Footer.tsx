/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Link from "next/link"
import SubscribeToNewsLetter from "./SubscribeToNewsLetter"

const navigation = {

  importantLinks: [
    { name: "Explore Properties", href: "/properties" },
    { name: "Our Services", href: "/services" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Our partners", href: "/agencies" },
    { name: "Our agents", href: "/agents" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },

  ],
  followInstagram: [
    '/images/instagram/img1.png',
    '/images/instagram/img2.png',
    '/images/instagram/img3.png',
    '/images/instagram/img4.png',
    '/images/instagram/img5.png',
    '/images/instagram/img6.png'
  ],

}

export default function Footer({ isHome }: { isHome: boolean }) {
  return (
    <footer  className={isHome ? "bg-primary-dark w-full xl:px-60 lg:px-40 md:px-12 xl:pt-20 lg:pt-28 md:pt-36 relative" : "bg-primary-dark w-full xl:px-60 lg:px-40 md:px-12"} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {isHome && <SubscribeToNewsLetter />}
      <div className="mx-auto w-full py-12 lg:py-16">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 xl:col-span-7">
            <div className="mt-12 md:mt-0 space-y-6">
              <div className="flex items-center space-x-2">
                <Image src="/icons/logo_white.svg" width="30" height="30" />
                <h3 className="text-base font-medium text-white">Prime Properties</h3>
              </div>
              <div className="flex flex-col space-y-6">
                <p className="text-base text-gray-300">There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.</p>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-lg text-white">Working Hours</h2>
                  <p className="text-base text-gray-300">Monday - Friday 10:00am - 06:00pm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium text-white">Important Links</h3>
              <div className="grid grid-cols-2 gap-x-4">
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.importantLinks.slice(0, 5).map((item) => (
                    <Link key={item.name} href={item.href}>
                      <li key={item.name} className="text-base cursor-pointer text-gray-300 hover:text-white flex space-x-2 items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.importantLinks.slice(5).map((item) => (
                    <Link key={item.name} href={item.href}>
                      <li key={item.name} className="text-base cursor-pointer text-gray-300 hover:text-white flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-white ">Follow Instagram</h3>
              <ul role="list" className="mt-4 grid grid-cols-3 gap-2">
                {navigation.followInstagram.map((item, i) => (
                  <div className="xl:w-24 md:w-36 xl:h-24 md:h-36 relative" key={i}>
                    <Image objectFit="cover" key={i} src={item} layout="fill" />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-t-gray-400 flex pt-6 justify-center">
          <p className="mt-8 text-base text-white/75 md:mt-0">
            developed And maintainded by <a className="underline" href="https://github.com/Mutesa-Cedric" target={'_blank'} rel={"noreferrer"}>Mutesa Cedric</a> .
          </p>
        </div>
      </div>
    </footer >
  )
}
