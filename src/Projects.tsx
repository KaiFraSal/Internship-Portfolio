import { useEffect, useState } from "react";
import { projectsData} from "./data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "./data/projectsData";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function chunkArray<T>(array: T[], size: number): T[][] {
      const chunks: T[][] = [];
      for (let i = 0; i < array.length; i += size) {
          chunks.push(array.slice(i, i + size));
      }
      return chunks;
  }

  const [gridSize, setGridSize] = useState<number>(() =>
    typeof window !== "undefined" && window.innerWidth <= 768 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      const newGridSize = window.innerWidth <= 768 ? 2 : 4;
      setGridSize(newGridSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    setCurrentIndex(0);
  }, [gridSize]);

  const projectPages = chunkArray(projectsData, gridSize);

  const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? projectPages.length - 1 : prev - 1));
    };

  const handleNext = () => {
        setCurrentIndex((prev) => (prev === projectPages.length - 1 ? 0 : prev + 1));
    };

  const handleGoToSlide = (index: number) => {
        setCurrentIndex(index);
    };

return (
    <section id="Projects-Section" className="w-full min-h-screen py-16 relative overflow-hidden text-white">
      
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-sky-200 to-white to-60% pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-orange-300 to-white to-60% pointer-events-none" />
      
      <div className="section-container mx-auto px-4 flex flex-col items-center">
        
        <h2 className="text-7xl text-black z-10 mb-2 font-bold text-center">My Projects</h2>
        <p className="z-10 text-black mb-10">Press cards for more details!</p>

        <div id="default-carousel" className="relative section-container">
            
            <div className="relative overflow-hidden rounded-2xl min-h-[780px]">
                {projectPages.map((pageProjects, pageIdx) => (
                    <div
                        key={pageIdx}
                        className={`duration-700 ease-in-out transition-all ${
                            pageIdx === currentIndex ? "block" : "hidden"
                        }`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-center justify-items-center max-w-4xl mx-auto p-2">
                          {pageProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                          ))}
                        </div>
                    </div>
                ))}
            </div>

            {projectPages.length > 1 && (
                <div className="absolute z-20 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse">
                    {projectPages.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleGoToSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                idx === currentIndex
                                    ? "bg-orange-500 w-6"
                                    : "bg-slate-600 hover:bg-slate-400"
                            }`}
                            aria-current={idx === currentIndex ? "true" : "false"}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

            {projectPages.length > 1 && (
                <>
                  <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute top-1/2 -translate-y-1/2 start-0 z-20 flex items-center justify-center w-10 h-10 cursor-pointer group focus:outline-none -left-2 sm:-left-5"
                  >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 text-white group-hover:bg-slate-700 shadow-lg">
                          <svg
                              className="w-5 h-5 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                          >
                              <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m15 19-7-7 7-7"
                              />
                          </svg>
                          <span className="sr-only">Previous</span>
                      </span>
                  </button>

                  <button
                      type="button"
                      onClick={handleNext}
                      className="absolute top-1/2 -translate-y-1/2 end-0 z-20 flex items-center justify-center w-10 h-10 cursor-pointer group focus:outline-none -right-2 sm:-right-5"
                  >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 text-white group-hover:bg-slate-700 shadow-lg">
                          <svg
                              className="w-5 h-5 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                          >
                              <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m9 5 7 7-7 7"
                              />
                          </svg>
                          <span className="sr-only">Next</span>
                      </span>
                  </button>
              </>
            )}
        </div>

      </div>

      <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}