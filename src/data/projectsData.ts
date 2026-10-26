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
        projectName: "ReNewvate",
        mainImageSrc: "/src/assets/react.svg",
        category: "Web App",
        popupImages: ["/src/assets/mobApptest.png", "/src/assets/webTest.png"],
        projectDate: "2025 - Present",
        location: "Remote",
        role: "Lead Frontend Developer",
        description: "An advanced cybersecurity dashboard designed for B2B SaaS monitoring.",
        features: ["Real-time threat detection", "Custom role-based access", "Encrypted audit logs"],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        outcome: "Reduced system vulnerability reporting time by 40%."
    },
    {
        id: 2,
        projectName: "Project 2",
        mainImageSrc: "/src/assets/react.svg",
        category: "Mobile App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2025 - Present",
        location: "Remote",
        role: "Lead Frontend Developer",
        description: "An advanced cybersecurity dashboard designed for B2B SaaS monitoring.",
        features: ["Real-time threat detection", "Custom role-based access", "Encrypted audit logs"],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        outcome: "Reduced system vulnerability reporting time by 40%."
    },
    {
        id: 3,
        projectName: "Project 3",
        mainImageSrc: "/src/assets/react.svg",
        category: "Web App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2025 - Present",
        location: "Remote",
        role: "Lead Frontend Developer",
        description: "An advanced cybersecurity dashboard designed for B2B SaaS monitoring.",
        features: ["Real-time threat detection", "Custom role-based access", "Encrypted audit logs"],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        outcome: "Reduced system vulnerability reporting time by 40%."
    },
    {
        id: 4,
        projectName: "Project 4",
        mainImageSrc: "/src/assets/react.svg",
        category: "Mobile App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2025 - Present",
        location: "Remote",
        role: "Lead Frontend Developer",
        description: "An advanced cybersecurity dashboard designed for B2B SaaS monitoring.",
        features: ["Real-time threat detection", "Custom role-based access", "Encrypted audit logs"],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        outcome: "Reduced system vulnerability reporting time by 40%."
    },
    {
        id: 5,
        projectName: "Project 5",
        mainImageSrc: "/src/assets/react.svg",
        category: "Web App",
        popupImages: ["/img1.png", "/img2.png"],
        projectDate: "2025 - Present",
        location: "Remote",
        role: "Lead Frontend Developer",
        description: "An advanced cybersecurity dashboard designed for B2B SaaS monitoring.",
        features: ["Real-time threat detection", "Custom role-based access", "Encrypted audit logs"],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        outcome: "Reduced system vulnerability reporting time by 40%."
    },
];