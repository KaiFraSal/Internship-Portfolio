export default function Header() {

  return (
    <header id="Header-Section" className="w-full bg-radial-[at_50%_5%] from-indigo-900 via-blue-400 to-sky-200 to-70% md:min-h-screen md:min-h-[410px] max-md:h-[1300px] py-16 relative overflow-hidden text-white">
        
        <div className="max-w-6xl w-full mx-auto px-4 flex flex-col items-center">
            
            <h1 className="text-8xl font-bold mt-16 text-white drop-shadow-md">Kaizen Salvador</h1>
            <p className="text-2xl mt-7 text-white max-w-2xl">4th year BSIT student with a specialization in web and mobile applications.</p>
            
            <div className="flex flex-col md:flex-row md:justify-center py-16 md:space-x-[-30px] space-y-6 md:space-y-0 relative w-full">
                
                <a href="#Projects-Section" className="headerCard rotate-2 top-10 left-10 sm:rotate-3 max-md:absolute sm:left-10 2xl:top-50 2xl:left-1/32 md:mt-[20%] hover:rotate-0">
                    <div className="headerCardTitle">
                        Projects
                    </div>
                    <div className="w-full h-[300px] border border-white/20 rounded-2xl relative p-6 shadow-xl">
                        <img src="/assets/recycle_foreground2.png" className="w-30 absolute top-3 left-5"/>
                        <img src="/assets/brain&board.png" className="w-35 absolute top-2 right-2"/>
                        <img src="/assets/johnspcs.png" className="w-30 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/32 border border-solid"/>
                    </div>
                </a>

                <a href="#Skills-Section" className="headerCard -rotate-10 top-75 right-18 sm:-rotate-8 max-md:absolute sm:top-70 sm:right-10 2xl:top-5 2xl:left-1/4 hover:rotate-0">
                    <div className="headerCardTitle">
                        Skills
                    </div>
                    <div className="w-full h-[300px] border border-white/20 rounded-2xl relative p-6 shadow-xl">
                        <img src="/assets/react.svg" className="w-30 absolute top-8 left-5"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-25 absolute top-8 right-5 -rotate-9"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-25 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/4 rotate-9"/>
                    </div>
                </a>

                <a href="#Certifications-Section" className="headerCard rotate-9 top-145 left-27 sm:rotate-5 max-md:absolute sm:top-140 sm:left-37 2xl:top-50 2xl:left-1/3 md:mt-[20%] hover:rotate-0">
                    <div className="headerCardTitle">
                        Certifications
                    </div>
                    <div className="w-full h-[300px] border border-white/20 rounded-2xl relative p-6 shadow-xl">
                        <img src="/assets/cyberops-associate.png" className="w-30 absolute top-24 left-5 rotate-9"/>
                        <img src="/assets/microsoft-office-specialist-excel-associate-office-2019.png" className="w-30 absolute top-8 right-5"/>
                    </div>
                </a>

            </div>

        </div>
        
    </header>
  )
}