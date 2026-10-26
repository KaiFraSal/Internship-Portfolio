export default function Header() {

  return (
    <header id="Header-Section" className="section-container border-3 border-solid border-blue-500 md:min-h-screen md:min-h-[410px] max-md:h-[1300px] px-10">
        {/* text-[min(12vw,90px)] */}
        <h1 className="text-8xl font-bold mt-16">Kaizen Salvador</h1>
        <p className="text-2xl mx-3 mt-7">4th year BSIT student with a specialization in web and mobile applications.</p>
        {/* flex flex-col md:flex-row justify-center items-center  */}
        <div className="flex flex-col md:flex-row md:justify-center py-16 md:space-x-[-30px] space-y-6 md:space-y-0 relative">
            
            <div className="headerCard rotate-2 top-10 left-10 sm:rotate-3 max-md:absolute sm:left-10 2xl:top-50 2xl:left-1/32 md:mt-[20%]">
                <div className="headerCardTitle">
                    Projects
                </div>
                <div className="p-4 text-slate-400 text-sm">
                </div>
            </div>

            <div className="headerCard -rotate-10 top-75 right-18 sm:-rotate-8 max-md:absolute sm:top-70 sm:right-10 2xl:top-5 2xl:left-1/4">
                <div className="headerCardTitle">
                    Skills
                </div>
                <div className="p-4 text-slate-400 text-sm">
                </div>
            </div>

            <div className="headerCard rotate-9 top-145 left-27 sm:rotate-5 max-md:absolute sm:top-140 sm:left-37 2xl:top-50 2xl:left-1/3 md:mt-[20%]">
                <div className="headerCardTitle">
                    Certifications
                </div>
                <div className="p-4 text-slate-400 text-sm">
                </div>
            </div>

        </div>
        
    </header>
  )
}