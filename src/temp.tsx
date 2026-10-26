import { useState } from "react";
import { certificationsData } from "./data/certificationData";

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificationsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificationsData.length - 1 ? 0 : prev + 1));
  };

  const handleGoToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const activeCert = certificationsData[currentIndex];

  return (
    <section id="Certifications-Section" className="section-container border-3 border-solid border-orange-300 xl:min-h-screen py-16 flex flex-col items-center">
        <h2 className="text-7xl font-bold mb-10 text-center">Certifications</h2>

        <div className="flex flex-col-reverse items-center md:flex-row-reverse md:justify-around md:items-center mb-7">
            <div id="default-carousel" className="relative w-full max-w-3xl mb-12">
                <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
                    {certificationsData.map((cert, idx) => (
                        <div
                            key={cert.id}
                            className={`absolute inset-0 duration-700 ease-in-out transition-all flex items-center justify-center p-4 bg-zinc-950/40 ${
                                idx === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
                            }`}
                        >
                            <img 
                                src={cert.image} 
                                className="w-full h-full object-contain rounded-xl" 
                                alt={cert.title} 
                            />
                        </div>
                    ))}
                </div>

                {certificationsData.length > 1 && (
                    <div className="absolute z-20 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
                        {certificationsData.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => handleGoToSlide(idx)}
                                className={`h-3 rounded-full transition-all ${
                                    idx === currentIndex ? "bg-orange-500 w-6" : "bg-slate-600 w-3 hover:bg-slate-400"
                                }`}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}

                <button 
                    type="button" 
                    onClick={handlePrev}
                    className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none -left-6 sm:-left-12"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 group-hover:bg-slate-700">
                        <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button 
                    type="button" 
                    onClick={handleNext}
                    className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none -right-6 sm:-right-12"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 group-hover:bg-slate-700">
                        <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className="w-full md:w-[70%] border-2 border-solid border-zinc-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-4xl font-bold mb-4">{activeCert.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm bg-blue-600/30 text-blue-900 px-3 py-1 rounded-full border border-blue-500">
                        Issued By: {activeCert.issuer}
                    </span>
                    <span className="text-sm bg-yellow-600/30 text-yellow-900 px-3 py-1 rounded-full border border-yellow-500">
                        Issue Date: {activeCert.date}
                    </span>
                </div>
                <p className="text-xl leading-relaxed">{activeCert.description}</p>
                <button className="bg-amber-400">Verify</button>
            </div>
        </div>

    </section>
  );
}