import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="section-container fixed z-30 top-4 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-900/40 backdrop-blur-md border border-white/20 rounded-[50px] shadow-lg shadow-black/10">
				<div className="flex flex-wrap items-center justify-between mx-auto px-6 py-3">

					<a href="#Header-Section" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img src="/assets/k.png" className="h-7" alt="Portfolio Logo" />
						<span className="self-center text-xl text-white font-semibold whitespace-nowrap">Portfolio</span>
					</a>

					<button 
							onClick={() => setIsMenuOpen(!isMenuOpen)} 
							type="button" 
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none" 
							aria-controls="navbar-default" 
							aria-expanded={isMenuOpen}>

						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
					</button>

					<div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-2xl bg-black/40 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
							<li>
								<a href="#Header-Section" className="block py-2 px-3 text-amber-400 font-semibold md:p-0 hover:text-amber-300 transition" aria-current="page">Home</a>
							</li>
							<li>
								<a href="#Projects-Section" className="block py-2 px-3 text-slate-200 md:p-0 hover:text-amber-400 transition">Projects</a>
							</li>
							<li>
								<a href="#Skills-Section" className="block py-2 px-3 text-slate-200 md:p-0 hover:text-amber-400 transition">Skills</a>
							</li>
							<li>
								<a href="#Certifications-Section" className="block py-2 px-3 text-slate-200 md:p-0 hover:text-amber-400 transition">Certifications</a>
							</li>
							<li>
								<a href="#Contact-Section" className="block py-2 px-3 text-slate-200 md:p-0 hover:text-amber-400 transition">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
