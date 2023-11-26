'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import CTAButton from './CTAButton'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('')
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    let lastScrollY = window && window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window && window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection) // clean up
    }
  }, [scrollDirection])
  return (
    // <header
    //   className={`fixed w-full  backdrop-blur-sm`}
    // style={
    //   scrollDirection === 'down'
    //     ? { background: 'transparent', zIndex: '2' }
    //     : { background: '#F5DBE2', zIndex: '2' }
    // }
    // >
    //   <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-5xl ">
    //     <div>
    //       <Link href="/" aria-label={siteMetadata.headerTitle}>
    //         <div className="flex items-center justify-between">
    //           <div className="mr-3">
    //             <Logo />
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
    // {headerNavLinks
    //   // .filter((link) => link.href !== '/')
    //   .map((link) => (
    //     <Link
    //       key={link.title}
    //       href={link.href}
    //       className="hidden font-[lora] text-lg text-gray-900 dark:text-gray-100 sm:block "
    //     >
    //       {link.title}
    //     </Link>
    //   ))}
    //     </div>
    // <div>
    //   <div className="hidden sm:block">
    //     <CTAButton type="demo" />
    //     <CTAButton type="contact" />
    //   </div>
    //   {/* <ThemeSwitch /> */}
    //   <MobileNav />
    // </div>
    //   </div>
    // </header>
    <div>
      <nav
        className="fixed w-full backdrop-blur-sm"
        style={
          scrollDirection === 'down'
            ? { background: 'transparent', width: '100vw', zIndex: 2 }
            : { background: '#F5DBE2', width: '100vw', zIndex: 2 }
        }
      >
        <div className="mx-auto justify-between md:flex md:items-center  lg:max-w-5xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              <a href="#">
                <div>
                  <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between">
                      <div className="mr-3">
                        <Logo />
                      </div>
                    </div>
                  </Link>
                </div>{' '}
              </a>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blackText"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blackText"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="font-[lora] text-blackText">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-[lora] text-blackText">
                  <Link href="/product">Product</Link>
                </li>
                <li className="font-[lora] text-blackText">
                  <Link href="/company">Company</Link>
                </li>
                <li className="font-[lora] text-blackText">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="hidden sm:block">
              <CTAButton type="demo" />
              <CTAButton type="contact" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
