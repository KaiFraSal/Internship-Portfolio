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
            className="h-90 w-80 bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:border-blue-500 flex flex-col justify-between"
        >
            <div className="flex pl-4 items-center h-14 bg-slate-800/50 border-b border-slate-700 text-lg font-bold text-white">
                {project.projectName}
            </div>

            <div className="flex-1 flex items-center justify-center p-4">
                <img src={project.mainImageSrc} alt={project.projectName} className="h-48 object-contain" />
            </div>

            <div className="px-4 py-3 border-t border-slate-700 text-slate-400 text-sm font-medium">
                {project.category}
            </div>
        </div>
    );
}