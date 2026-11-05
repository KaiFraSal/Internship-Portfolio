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
        mainImageSrc: "/assets/renewvate-mobile.png",
        category: "Mobile App",
        popupImages: ["/assets/renewvate-app-1.png", "/assets/renewvate-app-2.png", "/assets/renewvate-app-3.png", "/assets/renewvate-app-4.png", "/assets/renewvate-app-5.png", "/assets/renewvate-app-6.png", "/assets/renewvate-app-7.png"],
        projectDate: "2026",
        location: "Muntinlupa, Metro Manila",
        role: "Main Developer",
        description: "A marketplace application features using React Native and Supabase, including real-time messaging, user authentication, and item listing.",
        features: ["Listing Materials", "Real-time Messaging", "Transaction Flow", "Proximity Visualizer"],
        techStack: ["React Native", "TypeScript", "CSS", "Supabase"],
        outcome: "Successfully tested by respondents and observed successful usage."
    },
    {
        id: 2,
        projectName: "ReNewvate Admin Dashboard",
        mainImageSrc: "/assets/renewvate-web.png",
        category: "Web App",
        popupImages: ["/assets/renewvate-web-1.png", "/assets/renewvate-web-2.png", "/assets/renewvate-web-3.png", "/assets/renewvate-web-4.png", "/assets/renewvate-web-5.png", "/assets/renewvate-web-6.png", "/assets/renewvate-web-7.png", "/assets/renewvate-web-8.png", "/assets/renewvate-web-9.png"],
        projectDate: "2026",
        location: "Muntinlupa, Metro Manila",
        role: "Co-Developer",
        description: "An admin-side report and appeal system, enabling moderators to review and process user tickets.",
        features: ["Custom domain", "Active Customer Logs", "Standard Administrative functionality"],
        techStack: ["JavaScript", "HTML", "CSS", "Supabase"],
        outcome: "Successfully hosted on vercel with a custom domain."
    },
    {
        id: 3,
        projectName: "Brain & Board",
        mainImageSrc: "/assets/brain&board.png",
        category: "Web App",
        popupImages: ["/assets/bb1.png", "/assets/bb2.png", "/assets/bb3.png", "/assets/bb4.png", "/assets/bb5.png"],
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
        mainImageSrc: "/assets/johnspcs.png",
        category: "Web App",
        popupImages: ["/assets/jpc1.png", "/assets/jpc2.png", "/assets/jpc2-r.png", "/assets/jpc3.png", "/assets/jpc3-r.png", "/assets/jpc3-r2.png", "/assets/jpc4.png", "/assets/jpc4-r.png", "/assets/jpc5.png", "/assets/jpc5-r.png"],
        projectDate: "2024",
        location: "Muntinlupa, Metro Manila",
        role: "Solo Developer",
        description: "A fully responsive computer parts storefront from scratch using vanilla HTML, CSS, and JavaScript.",
        features: ["Responsive Design", "Reactive UI", "Real-time Filter"],
        techStack: ["JavaScript", "HTML", "CSS"],
        outcome: "Successfully developed a responsive frontend website."
    },
];