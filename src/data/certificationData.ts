export interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
}

export const certificationsData: Certification[] = [
    {
        id: 1,
        title: "CyberOps Associate",
        issuer: "Cisco",
        date: "2025",
        description: "Cisco verifies the earner of this badge successfully completed the CyberOps Associate course. The holder of this student-level credential has a broad understanding of Security Operations. They developed problem-solving skills to detect and analyze intrusions and monitor the network by completing up to 30 hours of 52 hands-on labs using virtual machines (Security Onion - ELK) and/or Cisco Packet Tracer.",
        image: "src/assets/react.svg",
    },
    {
        id: 2,
        title: "Microsoft Office Specialist: Excel Associate (Office 2019)",
        issuer: "Microsoft",
        date: "2026",
        description: "Microsoft Excel certification earners have a fundamental understanding of Excel and the ability to complete tasks independently. Earners have proven they can create and edit a workbook with multiple sheets, and use graphic elements to represent data visually including professional-looking budgets, financial statements, performance charts, and data-entry logs. Excel earners include students, business professionals, clerical workers, bookkeepers, and others.",
        image: "src/assets/vite.svg",
    },
];