import type { SkillCategory } from "./data/skillsData";

interface SkillSegmentProps {
    skillCategory: SkillCategory;
}

export default function SkillsComponent({skillCategory}: SkillSegmentProps){

    let imageStylingArray: string[];

    if(skillCategory.listItemImages.length === 3){
        imageStylingArray = [
            "w-35 absolute top-8 left-5",
            "w-35 absolute top-8 right-5",
            "w-35 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/16"
        ]
    }
    else if(skillCategory.listItemImages.length === 4){
        imageStylingArray = [
            "w-30 absolute top-5 left-5",
            "w-30 absolute top-5 right-5",
            "w-30 absolute bottom-5 left-5",
            "w-30 absolute bottom-5 right-5"
        ]
    }
    else if(skillCategory.listItemImages.length === 5){
        imageStylingArray = [
            "w-30 absolute top-5 left-5",
            "w-30 absolute top-5 right-5",
            "w-30 absolute bottom-5 left-5",
            "w-30 absolute bottom-5 right-5",
            "w-30 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        ]
    }

    return(
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-around mb-12 w-full gap-8">
            <div className="w-full md:w-[45%] flex flex-col">
                <h3 className="text-4xl font-bold mb-3">{skillCategory.category}</h3>
                <p className="text-xl mb-3 text-black">{skillCategory.description}</p>
                <p className="text-lg text-black">{skillCategory.list}</p>
            </div>

            <div className="w-full md:w-[45%] h-[300px] bg-black/20 border border-white/20 backdrop-blur-md rounded-2xl relative p-6 shadow-xl">
                {skillCategory.listItemImages.map((image, index) => (
                    <img key={index} src={image} className={`${imageStylingArray[index]}`} />
                ))}
            </div>
        </div>
    );
}