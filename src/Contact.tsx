export default function Contact() {
  return (
    <section id="Contact-Section" className="w-full h-screen flex flex-col justify-center items-center px-4 bg-radial-[at_50%_145%] from-indigo-900 via-blue-400 to-sky-200 to-70%">
        
        <div className="max-w-5xl w-full mx-auto flex flex-col justify-center items-center">
          <h2 className="text-8xl md:text-9xl font-extrabold mb-12 text-center text-black tracking-tight font-IBMPlexSans">
              Get in touch
          </h2>
          
          <div className="flex flex-wrap gap-4 items-center justify-center text-slate-200 border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-6 py-4 shadow-2xl">
              <span className="text-base md:text-lg font-medium px-2 text-black">
                  kaizensalvadore@gmail.com
              </span>
              
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black text-sm font-medium transition shadow-sm">
                  Copy Email
              </button>
              
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black text-sm font-medium transition shadow-sm">
                  Resume
              </button>
              
              <div className="flex items-center gap-3 pl-2 border-l border-white/20">
                  <a href="https://www.linkedin.com/in/kaizensalvador/" target="_blank" className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black transition cursor-pointer flex items-center justify-center">
                      <img src="src/assets/linkedin.svg" className="w-5 h-5 brightness-0" alt="LinkedIn" />
                  </a>
                  
                  {/* <a href="#" className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black transition cursor-pointer flex items-center justify-center">
                      <img src="src/assets/github.svg" className="w-5 h-5 brightness-0" alt="GitHub" />
                  </a> */}
              </div>
          </div>
      </div>

    </section>
  );
}