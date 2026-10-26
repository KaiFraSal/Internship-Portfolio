export interface Project {
    id: number;
    projectName: string;
    mainImageSrc: string;
    category: string;
    popupImages: string[];
    projectDate: string;
    location: string;
    role: string;
    description: string;
    features: string[];
    techStack: string[];
    outcome: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        projectName: "ReNewvate App",
        mainImageSrc: "src/assets/ReNewvate-Splash3.png",
        category: "Mobile App",
        popupImages: ["/src/assets/mobApptest.png", "/src/assets/webTest.png"],
        projectDate: "2026",
        location: "Muntinlupa, Metro Manila",
        role: "Main Developer",
        description: "A marketplace application features using React Native and Supabase, including real-time messaging, user authentication, and item listing.",
        features: ["Listing Materials", "Real-time Messaging", "Transaction Flow"],
        techStack: ["React Native", "TypeScript", "CSS"],
        outcome: "Successfully tested by respondents and observed successful usage."
    },
    {
        id: 2,
        projectName: "ReNewvate Admin Dashboard",
        mainImageSrc: "src/assets/recycle_foreground2.png",
        category: "Web App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2026",
        location: "Muntinlupa, Metro Manila",
        role: "Co-Developer",
        description: "An admin-side report and appeal system, enabling moderators to review and process user tickets.",
        features: ["Custom domain", "Active Customer Logs", "Standard Administrative functionality"],
        techStack: ["JavaScript", "HTML", "CSS"],
        outcome: "Successfully hosted on vercel with a custom domain."
    },
    {
        id: 3,
        projectName: "Brain & Board",
        mainImageSrc: "src/assets/brain&board.png",
        category: "Web App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2025",
        location: "Muntinlupa, Metro Manila",
        role: "Solo Developer",
        description: "A local WordPress e-commerce store for board games and puzzles, featuring product catalogs, cart workflows, and checkout logic.",
        features: ["Product Cart functionality", "Product Detail Pages", "Emailing Invoice Upon Ordering"],
        techStack: ["WordPress", "CSS"],
        outcome: "Successfully developed an e-commerce with invoice processing."
    },
    {
        id: 4,
        projectName: "John's PCs",
        mainImageSrc: "src/assets/john'spcs.png",
        category: "Web App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2024",
        location: "Muntinlupa, Metro Manila",
        role: "Solo Developer",
        description: "A fully responsive computer parts storefront from scratch using vanilla HTML, CSS, and JavaScript.",
        features: ["Responsive Design", "Reactive UI", "Real-time Filter"],
        techStack: ["JavaScript", "HTML", "CSS"],
        outcome: "Successfully developed a responsive frontend website."
    },
];