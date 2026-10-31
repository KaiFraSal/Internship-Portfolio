// src/components/ProjectCard.tsx
import type { Project } from "./data/projectsData";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div 
            onClick={onClick}
            className="h-96 w-80 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20 flex flex-col justify-between group"
        >
            <div className="flex px-5 items-center h-14 border-b border-white/10 text-lg font-bold text-black transition-colors">
                {project.projectName}
            </div>

            <div className="flex-1 flex items-center justify-center p-6">
                <img src={project.mainImageSrc} alt={project.projectName} className="h-44 w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between text-black text-sm font-medium">
                <span>{project.category}</span>
                <span className="text-black text-xs font-semibold opacity-0  group-hover:opacity-100 transition-opacity">View Details →</span>
            </div>
        </div>
    );
}