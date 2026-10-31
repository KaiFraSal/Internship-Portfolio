import { useState, useRef, useEffect } from "react";
import type { Project } from "./data/projectsData";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [zoomedImg, setZoomedImg] = useState<string | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(0);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const activeThumb = thumbnailRefs.current[pageNumber];
        const container = scrollContainerRef.current;

        if (activeThumb && container) {
            const scrollLeftPos = 
                activeThumb.offsetLeft - 
                container.offsetWidth / 2 + 
                activeThumb.offsetWidth / 2;

            container.scrollTo({
                left: scrollLeftPos,
                behavior: 'smooth'
            });
        }
    }, [pageNumber]);

    if (!project) return null;

    return (
        <div 
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4" 
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="bg-zinc-950 border border-zinc-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 relative text-white shadow-2xl">
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-5xl font-bold mb-5">{project.projectName}</h2>
                <div className="flex flex-wrap gap-2">
                    <div className="text-sm bg-blue-600/30 text-blue-400 px-3 p-1 rounded-full border border-blue-500/30">
                        Category: {project.category}
                    </div>
                    <div className="text-sm bg-yellow-600/30 text-yellow-400 px-3 p-1 rounded-full border border-yellow-500/30">
                        When: {project.projectDate}
                    </div>
                    <div className="text-sm bg-green-600/30 text-green-400 px-3 p-1 rounded-full border border-green-500/30">
                        Role: {project.role}
                    </div>
                    <div className="text-sm bg-purple-600/30 text-purple-400 px-3 p-1 rounded-full border border-purple-500/30">
                        Location: {project.location}
                    </div>
                </div>

                <div className="flex justify-center mt-5 max-h-100 flex-nowrap gap-4">
                    <button 
                        onClick={() => {
                            if(pageNumber > 0){
                                setPageNumber(pageNumber - 1);
                            }
                        }}
                        className="hover:bg-white/20 active:bg-white/40 text-white px-4 rounded-xl flex items-center cursor-pointer font-semibold select-none transition"
                    >
                        <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </button>
                    <div 
                        onClick={() => setZoomedImg(project.popupImages[pageNumber])}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden p-2 shadow-inner w-full max-w-3xl flex justify-center items-center cursor-pointer group relative transition hover:border-blue-500"
                    >
                        <img 
                            src={project.popupImages[pageNumber]} 
                            alt={`${project.projectName} screenshot ${pageNumber + 1}`}
                            className="w-full h-auto max-h-100 object-contain rounded-lg transition group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm font-semibold text-white rounded-lg">
                            Click to Zoom
                        </div>
                    </div>
                    <button 
                        onClick={() => {
                            if(pageNumber < project.popupImages.length - 1){
                                setPageNumber(pageNumber + 1);
                            }
                        }}
                        className="hover:bg-white/20 active:bg-white/40 text-white px-4 rounded-xl flex items-center cursor-pointer font-semibold select-none transition"
                    >
                        <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                <div 
                    ref={scrollContainerRef}
                    className="flex flex-nowrap overflow-x-auto gap-4 mt-4 p-2 
                               [&::-webkit-scrollbar]:h-2.5 
                               [&::-webkit-scrollbar-track]:bg-zinc-900 
                               [&::-webkit-scrollbar-track]:rounded-full
                               [&::-webkit-scrollbar-thumb]:bg-zinc-700 
                               [&::-webkit-scrollbar-thumb]:rounded-full 
                               hover:[&::-webkit-scrollbar-thumb]:bg-zinc-500"
                >
                    {project.popupImages.map((imgSrc, idx) => (
                        <div 
                            key={idx}
                            ref={(el) => { thumbnailRefs.current[idx] = el; }}
                            onClick={() => {
                                setPageNumber(idx);
                            }}
                            className={`w-[180px] h-[110px] flex-shrink-0 ${
                                pageNumber === idx 
                                    ? "opacity-100 ring-2 ring-blue-500 border-blue-500" 
                                    : "opacity-40 border-zinc-800"
                            } bg-zinc-900 border rounded-xl overflow-hidden p-1 shadow-inner cursor-pointer group relative transition hover:border-blue-500 flex items-center justify-center`}
                        >
                            <img 
                                src={imgSrc} 
                                alt={`${project.projectName} screenshot ${idx + 1}`}
                                className="w-full h-full object-cover rounded-lg transition group-hover:scale-[1.03]"
                            />
                        </div>
                    ))}
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-4">Descriptions</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                <h3 className="font-semibold text-lg mb-2 mt-4">Key Features</h3>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 mb-6">
                    {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>

                <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="font-semibold text-lg mb-2">Outcome</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{project.outcome}</p>

            </div>
            
            {zoomedImg && (
                <div 
                    onClick={() => setZoomedImg(null)}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex justify-center items-center p-4 cursor-pointer"
                >
                    <div 
                        className="relative max-w-5xl w-full flex items-center justify-center p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setZoomedImg(null)}
                            className="absolute -top-4 -right-4 text-white bg-zinc-800 hover:bg-zinc-700 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold border border-zinc-600 shadow-xl z-10 cursor-pointer"
                        >
                            ✕
                        </button>

                        <img 
                            src={zoomedImg} 
                            alt="Enlarged preview" 
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-zinc-700 bg-zinc-950"
                        />
                    </div>
                </div>
            )}

        </div>
    );
}