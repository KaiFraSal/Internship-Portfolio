import { useState } from "react";

export default function Contact() {

  const emailText = "sample@gmail.com";
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <section id="Contact-Section" className="w-full h-screen flex flex-col justify-center items-center px-4 bg-radial-[at_50%_145%] from-indigo-900 via-blue-400 to-sky-200 to-70%">
          
          <div className="max-w-5xl w-full mx-auto flex flex-col justify-center items-center">
            <h2 className="text-8xl md:text-9xl font-extrabold mb-12 text-center text-black tracking-tight font-IBMPlexSans">
                Get in touch
            </h2>
            
            <div className="flex flex-wrap gap-4 items-center justify-center text-slate-200 border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-6 py-4 shadow-2xl">
                <span className="text-base md:text-lg font-medium px-2 text-black">
                    {emailText}
                </span>
                
                <button onClick={handleCopyEmail} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black text-sm font-medium transition shadow-sm">
                    {copied ? "Copied!" : "Copy Email"}
                </button>
                
                <button onClick={() => setIsResumeOpen(true)} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black text-sm font-medium transition shadow-sm">
                    Resume
                </button>
                
                <div className="flex items-center gap-3 pl-2 border-l border-white/20">
                    <a href="https://www.linkedin.com/in/kaizensalvador/" target="_blank" className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black transition cursor-pointer flex items-center justify-center">
                        <img src="/assets/linkedin.svg" className="w-5 h-5 brightness-0" alt="LinkedIn" />
                    </a>
                    
                    {/* <a href="#" className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-black transition cursor-pointer flex items-center justify-center">
                        <img src="/assets/github.svg" className="w-5 h-5 brightness-0" alt="GitHub" />
                    </a> */}
                </div>
            </div>
        </div>

      </section>
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl h-[85vh] bg-zinc-900 border border-white/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
                
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/50">
                    <h3 className="text-xl font-bold text-white">My Resume</h3>
                    <button 
                        onClick={() => setIsResumeOpen(false)}
                        className="text-slate-400 hover:text-white text-lg font-bold px-3 py-1 rounded-lg hover:bg-white/10 transition"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 w-full bg-zinc-900 p-4">
                    <iframe 
                        src="src/assets/resume.pdf"
                        className="w-full h-full rounded-xl border border-white/10"
                        title="Resume PDF"
                    />
                </div>

                <div className="flex justify-end gap-3 px-6 py-3 border-t border-white/10 bg-zinc-950/50">
                    <a 
                        href="src/assets/resume.pdf" 
                        download 
                        className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-amber-300 transition text-sm"
                    >
                        Download PDF
                    </a>
                </div>

            </div>
        </div>
    )}
    </>
  );
}