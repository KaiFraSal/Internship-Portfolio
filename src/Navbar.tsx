import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <>
        <nav className="section-container bg-neutral-primary fixed z-30 border-b border-default bg-amber-400 rounded-[50px] top-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-2">

            <a href="#Header-Section" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="public/k.png" className="h-7" alt="Portfolio Logo" />
                <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Portfolio</span>
            </a>

            <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" 
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen}>

                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
            </button>

            <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <a href="#Header-Section" className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:bg-amber-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#Projects-Section" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:bg-amber-500">Projects</a>
                </li>
                <li>
                  <a href="#Skills-Section" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:bg-amber-500">Skills</a>
                </li>
                <li>
                  <a href="#Certifications-Section" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:bg-amber-500">Certifications</a>
                </li>
                <li>
                  <a href="#Contact-Section" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:bg-amber-500">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <a href="#Header-Section" className="fixed right-15 bottom-15 bg-amber-600 p-5 rounded-full z-50">Up!</a> */}
      </>
  )
}
