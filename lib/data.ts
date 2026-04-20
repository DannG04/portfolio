import { IExperience, IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'gonzalezruizdaniel183@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Daniel, I am reaching out to you because...',

    linkedIn: 'https://www.linkedin.com/in/daniel-gonzalez-ruiz-18b454196',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/DannG04' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/daniel-gonzalez-ruiz-18b454196' },
    { name: 'instagram', url: 'https://www.instagram.com/danny_gz4/' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'Java',
            icon: '/logo/java.svg',
        },
        {
            name: 'Kotlin',
            icon: '/logo/kotlin.svg',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'C',
            icon: '/logo/c.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
    ],
    backend: [
        {
            name: 'Spring Boot',
            icon: '/logo/spring.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    frontend: [
        {
            name: 'Vue.js',
            icon: '/logo/vue.svg',
        },
    ],
    mobile: [
        {
            name: 'Kotlin',
            icon: '/logo/kotlin.svg',
        },
        {
            name: 'Android Studio',
            icon: '/logo/android.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Unity',
            icon: '/logo/unity.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'DATA-UNSIS',
        slug: 'data-unsis',
        year: 2025,
        description: `
            Institutional data analysis and visualization platform built as a team project for the Universidad de la Sierra Sur (UNSIS).<br/><br/>
            Key features:<br/>
            <ul>
                <li>Spatial analysis with PostgreSQL + PostGIS for geographic data visualization</li>
                <li>Interactive dashboard with charts and dynamic filters in Vue.js</li>
                <li>Authentication and role-based access control via Spring Security</li>
                <li>Robust REST API with Spring Boot consumed from the frontend</li>
            </ul>
        `,
        role: `
            Full-Stack Developer (classmate team)<br/>
            <ul>
                <li>Designed and implemented the user interface with Vue.js, improving visualization and querying of institutional data</li>
                <li>Developed REST endpoints in Spring Boot to expose geospatial data from PostgreSQL with PostGIS</li>
                <li>Collaborated on the relational database model design</li>
            </ul>
        `,
        techStack: ['Vue.js', 'Spring Boot', 'Java', 'PostgreSQL', 'PostGIS'],
        thumbnail: '/projects/thumbnail/data-unsis.webp',
        longThumbnail: '/projects/long/data-unsis.webp',
        images: [],
    },
    {
        title: 'CAABMO',
        slug: 'caabmo',
        year: 2025,
        description: `
            Web system for managing basketball referees in Oaxaca, centralizing the administration of roles, matches, and assignments.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Referee management: registration, profiles, and match assignments</li>
                <li>Match scheduling with real-time availability</li>
                <li>Administrative panel for directors with exportable reports</li>
                <li>REST API with FastAPI connected to PostgreSQL</li>
            </ul>
        `,
        role: `
            Full-Stack Developer<br/>
            <ul>
                <li>Developed the user interface with Vue.js, improving visualization and role management for referees</li>
                <li>Implemented the backend with FastAPI (Python) and modeled the database in PostgreSQL</li>
                <li>Designed the authentication and session management system</li>
            </ul>
        `,
        techStack: ['Vue.js', 'FastAPI', 'Python', 'PostgreSQL'],
        thumbnail: '/projects/thumbnail/caabmo.webp',
        longThumbnail: '/projects/long/caabmo.webp',
        images: [],
    },
    {
        title: 'Loan Management',
        slug: 'loan-management',
        year: 2024,
        description: `
            Cross-platform desktop application for personal loan management, built with Tauri to deliver native performance using web technologies.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Loan registration and tracking with automatic interest calculation</li>
                <li>Payment date control and due date alerts</li>
                <li>Local persistence with embedded SQLite</li>
                <li>Native installer for Windows, macOS, and Linux via Tauri</li>
            </ul>
        `,
        role: `
            Developer (personal project)<br/>
            <ul>
                <li>Designed and developed the desktop application using Tauri + Vue.js</li>
                <li>Implemented the data layer with SQLite for local persistence without external dependencies</li>
                <li>Built the interest calculation logic and payment alerts</li>
            </ul>
        `,
        techStack: ['Tauri', 'Vue.js', 'SQLite', 'Rust'],
        thumbnail: '/projects/thumbnail/loan-management.webp',
        longThumbnail: '/projects/long/loan-management.webp',
        images: [],
    },
    {
        title: 'Point of Sale',
        slug: 'pos-java',
        year: 2024,
        description: `
            Desktop point-of-sale system developed natively in Java, aimed at small businesses.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Sales, product, and inventory management in real time</li>
                <li>Receipt generation and direct printing</li>
                <li>Daily and per-product sales reports</li>
                <li>Local database with MySQL</li>
            </ul>
        `,
        role: `
            Developer (personal project)<br/>
            <ul>
                <li>Developed the complete system in Java with a native graphical interface</li>
                <li>Implemented MySQL integration for inventory and sales management</li>
                <li>Designed the report generation and export module</li>
            </ul>
        `,
        techStack: ['Java', 'MySQL', 'Swing'],
        thumbnail: '/projects/thumbnail/pos-java.webp',
        longThumbnail: '/projects/long/pos-java.webp',
        images: [],
    },
    {
        title: 'UNSIS Book Catalog',
        slug: 'unsis-book-catalog',
        year: 2025,
        description: `
            Mobile UI/UX design for the digital library catalog of the Universidad de la Sierra Sur (UNSIS), created in Figma.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Book search by title, author, and ISBN</li>
                <li>Availability status and book detail cards</li>
                <li>Download, preview, and physical copy request actions</li>
                <li>Pagination and category-based filtering</li>
            </ul>
        `,
        role: `
            UI/UX Designer (personal project)<br/>
            <ul>
                <li>Designed the complete mobile interface in Figma following a clean, accessible layout</li>
                <li>Created reusable components for book cards, navigation bar, and action buttons</li>
                <li>Applied UNSIS branding with consistent color scheme and typography</li>
            </ul>
        `,
        techStack: ['Figma'],
        thumbnail: '/projects/images/FIGMA-DESIGN/principal-mobile-version.png',
        longThumbnail: '/projects/images/FIGMA-DESIGN/principal-desktop-version.png',
        images: [
            '/projects/images/FIGMA-DESIGN/principal-mobile-version.png',
            '/projects/images/FIGMA-DESIGN/principal-desktop-version.png',
        ],
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Desarrollador de Software (Prácticas Profesionales)',
        company: 'UNSIS',
        duration: 'Jul 2025 – Sep 2025',
    },
    {
        title: 'Estancia Profesional',
        company: 'Universidad Autónoma del Estado de Hidalgo (UAEH)',
        duration: 'Jul 2026 – Sep 2026 (Próxima)',
    },
];
