export default function Skills() {
  return (
    <section id="Skills-Section" className="w-full bg-stone-950 min-h-screen py-16 text-white relative overflow-hidden">
      
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-200 to-stone-950 to-60% pointer-events-none" />

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-orange-300 to-stone-950 to-60% pointer-events-none" />

      <div className="section-container mx-auto px-4 flex flex-col items-center">
        
        <h2 className="text-7xl z-10 font-bold mb-16 text-center">Skills</h2>

        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-around mb-16 w-full gap-8">
            <div className="w-full md:w-[45%] flex flex-col">
                <h3 className="text-4xl font-bold mb-3">Languages</h3>
                <p className="text-xl mb-3 text-slate-200">I have learned these various languages used in development thoughout my time developing projects learning one after another enabling me to utilize efficient frameworks</p>
                <p className="text-lg text-slate-300">Languages: JavaScript, HTML, CSS, TypeScript, Python, C++, Java, Kotlin, SQL</p>
                {/* <div className="flex gap-3">  
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">JavaScript</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">TypeScript</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">HTML</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">CSS</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">Python</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">C++</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">Java</div>
                  <div className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">Kotlin</div>
                </div> */}
            </div>

            <div className="w-full md:w-[45%] h-[300px] bg-white/24 border border-white/20 backdrop-blur-md rounded-2xl relative p-6 shadow-xl">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-30 absolute top-5 left-5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-30 absolute top-5 right-5"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css/css-original.svg" className="w-30 absolute bottom-5 left-5"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-30 absolute bottom-5 right-5"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-30 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"/>
            </div>
        </div>
        
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-around mb-16 w-full gap-8">
          <div className="w-full md:w-[45%] flex flex-col">
            <h3 className="text-4xl font-bold mb-3">Frameworks & Libraries</h3>
            <p className="text-xl mb-3 text-slate-200">Powerful toolsets that stream line the development process that I have adopted and adapted to.</p>
            <p className="text-lg text-slate-300">Frameworks & Libraries: React, React Native, Tailwind, Flutter</p>
          </div>
          <div className="w-full md:w-[45%] h-[300px] bg-white/24 border border-white/20 backdrop-blur-md rounded-2xl relative p-6 shadow-xl">
            <img src="src/assets/react.svg" className="w-40 absolute top-8 left-5"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" className="w-40 absolute top-8 right-5"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-40 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/16"/>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-around mb-16 w-full gap-8">
          <div className="w-full md:w-[45%] flex flex-col">
            <h3 className="text-4xl font-bold mb-3">Tools & Databases</h3>
            <p className="text-xl mb-3 text-slate-200">These are the tools and databases that have word hand in hand to ensure everything goes smoothly utility and backend wise.</p>
            <p className="text-lg text-slate-300">Tools & Databases: Supabase, Git, Github, Vercel, WordPress, Firebase, PostgreSQL</p>
          </div>
          <div className="w-full md:w-[45%] h-[300px] bg-white/24 border border-white/20 backdrop-blur-md rounded-2xl relative p-6 shadow-xl">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-30 absolute top-5 left-5"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-30 absolute top-5 right-5"/>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-30 absolute bottom-5 left-5"/>
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" className="w-30 absolute bottom-5 right-5"/>
            <img src="src/assets/wordpress-color.svg" className="w-30 absolute bg-white rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"/>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-around w-full gap-8">
          <div className="w-full md:w-[45%] flex flex-col">
            <h3 className="text-4xl font-bold mb-3">Other Skills</h3>
            <p className="text-xl mb-3 text-slate-200">These are various miscellaneous skills I have gained over my time developing projects and along the way picked up to futher expand my skill set</p>
            <p className="text-lg text-slate-300">Other Technical Skills: Figma, Canva, Microsoft Excel, Google Sheets</p>
          </div>
          <div className="w-full md:w-[45%] h-[300px] bg-white/24 border border-white/20 backdrop-blur-md rounded-2xl relative p-6 shadow-xl">
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-30 absolute top-5 left-5"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" className="w-30 absolute top-5 right-5"/>
            <img src="src/assets/Google_Sheets.svg" className="w-25 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/16" />
          </div>
        </div>

      </div>
    </section>
  );
}