export interface SkillCategory {
    id: number;
    category: string;
    description: string;
    list: string;
    listItemImages: string[];
}

export const categoryData: SkillCategory[] = [
    {
        id: 1,
        category: "Languages",
        description: "I have learned these various languages used in development thoughout my time developing projects learning one after another enabling me to utilize efficient frameworks",
        list: "Languages: JavaScript, HTML, CSS, TypeScript, Python, C++, Java, Kotlin, Dart, SQL",
        listItemImages: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css/css-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
					     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
    },
    {
        id: 2,
        category: "Frameworks & Libraries",
        description: "Powerful toolsets that streamline the development process that I have adopted and adapted to.",
        list: "Frameworks & Libraries: React, React Native, Expo, Tailwind, Flutter",
        listItemImages: ["/assets/react.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
    },
    {
        id: 3,
        category: "Tools & Databases",
        description: "These are the tools and databases that have word hand in hand to ensure everything goes smoothly in terms of utility and backend.",
        list: "Tools & Databases: Supabase, Git, Github, Vercel, WordPress, Firebase, PostgreSQL",
        listItemImages: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
                         "/assets/wordpress-color.svg"],
    },
    {
        id: 4,
        category: "Other Skills",
        description: "These are various miscellaneous skills I have gained over my time developing projects and along the way picked up to futher expand my skill set",
        list: "Other Technical Skills: Figma, Canva, Microsoft Excel, Google Sheets",
        listItemImages: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", 
                         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", 
                         "/assets/Google_Sheets.png"],
    }
];