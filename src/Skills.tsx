import SkillsComponent from "./SkillsComponent"
import { categoryData } from "./data/skillsData";
// import type { SkillCategory } from "./data/skillsData";

export default function Skills() {
  	return (
		<section id="Skills-Section" className="w-full bg-linear-to-b from-orange-200 from-10% via-white to-sky-200 to-90% min-h-screen py-16 text-black relative overflow-hidden">
		
		{/* <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-100 to-orange-200 pointer-events-none" />
		<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-sky-100 to-sky-200 pointer-events-none" /> */}

		<div className="section-container mx-auto px-4 flex flex-col items-center">
			
			<h2 className="text-6xl sm:text-7xl z-10 font-bold mb-16 text-center">Skills</h2>


			{categoryData.map((data) => (
				<SkillsComponent skillCategory={data} />
			))}

		</div>
		</section>
 	);
}