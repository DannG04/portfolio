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
            Student data visualization and analysis system developed for the Universidad de la Sierra Sur (UNSIS) by eighth-semester informatics students.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Interactive dashboards with filters by degree, semester, and sex</li>
                <li>Statistical charts on sociodemographic indicators: economic level, civil status, indigenous languages, transportation, scholarships, blood type, and geographic origin</li>
                <li>Georeferenced heat map of student population distribution</li>
                <li>JWT-secured REST API with Spring Boot; Vue.js frontend</li>
            </ul>
        `,
        role: `
            Full-Stack Developer (classmate team)<br/>
            <ul>
                <li>Designed and implemented the user interface with Vue.js for institutional data visualization</li>
                <li>Developed REST endpoints in Spring Boot to expose geospatial data from PostgreSQL with PostGIS</li>
                <li>Collaborated on the relational database model design</li>
            </ul>
        `,
        techStack: ['Vue.js', 'Spring Boot', 'Java', 'PostgreSQL', 'PostGIS'],
        thumbnail: '/projects/images/DATA-UNSIS/dashboard_home.png',
        longThumbnail: '/projects/images/DATA-UNSIS/dashboard_home.png',
        images: [
            '/projects/images/DATA-UNSIS/login_screen.png',
            '/projects/images/DATA-UNSIS/dashboard_home.png',
            '/projects/images/DATA-UNSIS/datos_demograficos.png',
            '/projects/images/DATA-UNSIS/informacion_socioeconomica.png',
            '/projects/images/DATA-UNSIS/ayuda.png',
        ],
    },
    {
        title: 'CAABMO',
        slug: 'caabmo',
        year: 2025,
        description: `
            Full-stack web platform for the Cuerpo de Árbitros y Anotadores de Baloncesto de Miahuatlán (CAABMO), centralizing basketball referee management in a single system.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Weekly match administration with referee assignment and confirmation</li>
                <li>Role-based user management (admins, referees, scorekeepers)</li>
                <li>Educational resources portal and institutional communications</li>
                <li>Public-facing site with calendar and announcements</li>
                <li>Dockerized deployment with FastAPI, PostgreSQL, Vue 3, and Tailwind CSS</li>
            </ul>
        `,
        role: `
            Full-Stack Developer<br/>
            <ul>
                <li>Built the frontend with Vue 3, Vite, PrimeVue, and Tailwind CSS</li>
                <li>Implemented the backend with FastAPI, PostgreSQL, and SQLAlchemy</li>
                <li>Designed the authentication, role management, and Docker deployment pipeline</li>
            </ul>
        `,
        techStack: ['Vue.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker'],
        thumbnail: '/projects/images/CAABMO/caabmo-1.png',
        longThumbnail: '/projects/images/CAABMO/caabmo-1.png',
        images: [
            '/projects/images/CAABMO/caabmo-1.png',
            '/projects/images/CAABMO/caabmo-2.png',
            '/projects/images/CAABMO/caabmo-3.png',
            '/projects/images/CAABMO/caabmo-4.png',
            '/projects/images/CAABMO/caabmo-5.png',
            '/projects/images/CAABMO/caabmo-6.png',
        ],
    },
    {
        title: 'Loan Management',
        slug: 'loan-management',
        year: 2024,
        description: `
            Desktop application for loan and collections management, built with Vue 3, Tauri, and SQLite for fast, local, and secure operation.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Client management, loan registration with interest rates and terms</li>
                <li>Payment and installment tracking with due-date alerts and risk traffic-light indicator</li>
                <li>Key metrics dashboard for business overview</li>
                <li>Database backup and restore functionality</li>
                <li>Access controls and modern UI designed for daily real-world use</li>
            </ul>
        `,
        role: `
            Developer (personal project)<br/>
            <ul>
                <li>Designed and developed the desktop application using Tauri + Vue.js</li>
                <li>Implemented the data layer with SQLite for local persistence without external dependencies</li>
                <li>Built the interest calculation logic, payment alerts, and risk indicators</li>
            </ul>
        `,
        techStack: ['Tauri', 'Vue.js', 'SQLite', 'Rust'],
        thumbnail: '/projects/images/LEND-MANAGEMENT/lend-1.png',
        longThumbnail: '/projects/images/LEND-MANAGEMENT/lend-1.png',
        images: [
            '/projects/images/LEND-MANAGEMENT/lend-1.png',
            '/projects/images/LEND-MANAGEMENT/lend-2.png',
            '/projects/images/LEND-MANAGEMENT/lend-3.png',
            '/projects/images/LEND-MANAGEMENT/lend-4.png',
            '/projects/images/LEND-MANAGEMENT/lend-5.png',
            '/projects/images/LEND-MANAGEMENT/lend-6.png',
        ],
    },
    {
        title: 'Point of Sale',
        slug: 'pos-java',
        year: 2024,
        description: `
            Desktop point-of-sale system developed in Java with a Swing GUI and PostgreSQL, centralizing daily business operations.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Modular management: inventory, sales, customers, layaways, purchases, returns, expenses, profits, and employees</li>
                <li>Excel report generation and user authentication</li>
                <li>Modular architecture for easier maintenance and scalability</li>
            </ul>
        `,
        role: `
            Developer (personal project)<br/>
            <ul>
                <li>Developed the complete system in Java with a Swing graphical interface</li>
                <li>Implemented PostgreSQL integration for inventory, sales, and operations management</li>
                <li>Designed the Excel report generation and export module</li>
            </ul>
        `,
        techStack: ['Java', 'PostgreSQL', 'Swing'],
        thumbnail: '/projects/images/POINT-OF-SALE/pos-2.png',
        longThumbnail: '/projects/images/POINT-OF-SALE/pos-2.png',
        images: [
            '/projects/images/POINT-OF-SALE/pos-2.png',
            '/projects/images/POINT-OF-SALE/pos-3.png',
            '/projects/images/POINT-OF-SALE/pos-4.png',
            '/projects/images/POINT-OF-SALE/pos-1.png',
        ],
    },
    {
        title: 'UNSIS Smile',
        slug: 'unsis-smile',
        year: 2025,
        description: `
            Web system for managing dental clinical records, developed for the Universidad de la Sierra Sur (UNSIS), built with Spring Boot and Angular 17.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Complete dental clinical history management</li>
                <li>Real-time communication via WebSockets</li>
                <li>Role-based access control and CORS security configuration</li>
                <li>Deployed on Ubuntu server with automation scripts for local network operation</li>
            </ul>
        `,
        role: `
            Maintenance & Operations Developer<br/>
            <ul>
                <li>Resolved security issues: CORS configuration and data sanitization</li>
                <li>Implemented and stabilized real-time WebSocket communication</li>
                <li>Fixed UI bugs and database integrity errors</li>
                <li>Performed full deployment from scratch on an Ubuntu server, including automation scripts</li>
            </ul>
        `,
        techStack: ['Spring Boot', 'Angular', 'Java', 'PostgreSQL', 'WebSockets'],
        thumbnail: '/projects/images/UNSIS-SMILE/smile-1.png',
        longThumbnail: '/projects/images/UNSIS-SMILE/smile-1.png',
        images: [
            '/projects/images/UNSIS-SMILE/smile-1.png',
            '/projects/images/UNSIS-SMILE/smile-2.png',
            '/projects/images/UNSIS-SMILE/smile-3.png',
            '/projects/images/UNSIS-SMILE/smile-4.png',
        ],
    },
    {
        title: 'TastyMood',
        slug: 'tasty-mood',
        year: 2024,
        description: `
            Android mobile app built with Kotlin and Jetpack Compose that recommends recipes based on mood, diet type, and food preferences.<br/><br/>
            Key features:<br/>
            <ul>
                <li>Recipe filtering by emotion, diet, preferred or excluded ingredients</li>
                <li>Recipe detail view and favorites management</li>
                <li>Profile registration and editing with DataStore persistence</li>
                <li>Room database for local recipe management</li>
                <li>Navigation Compose, Coil image loading, ViewModel, and coroutines</li>
            </ul>
        `,
        role: `
            Developer (academic project)<br/>
            <ul>
                <li>Designed and developed the full Android app using Kotlin and Jetpack Compose</li>
                <li>Implemented local persistence with Room and DataStore</li>
                <li>Built the mood-based recommendation logic and filtering system</li>
            </ul>
        `,
        techStack: ['Kotlin', 'Jetpack Compose', 'Android', 'Room', 'DataStore'],
        thumbnail: '/projects/images/TASTY-MOOD/tasty-2.jpg',
        longThumbnail: '/projects/images/TASTY-MOOD/tasty-2.jpg',
        imageOrientation: 'portrait',
        images: [
            '/projects/images/TASTY-MOOD/tasty-1.jpg',
            '/projects/images/TASTY-MOOD/tasty-2.jpg',
            '/projects/images/TASTY-MOOD/tasty-3.jpg',
            '/projects/images/TASTY-MOOD/tasty-4.jpg',
            '/projects/images/TASTY-MOOD/tasty-5.jpg',
        ],
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
        thumbnail: '/projects/images/FIGMA-DESIGN/catalogo-unsis-mobile.png',
        longThumbnail: '/projects/images/FIGMA-DESIGN/frame1-desktop.png',
        liveUrl: 'https://www.figma.com/design/cWyUeDsjNYP4kBfdM7jNXm/Sin-t%C3%ADtulo?node-id=0-1&t=a3dM1ohEeSfM9AdT-1',
        images: [
            '/projects/images/FIGMA-DESIGN/catalogo-unsis-mobile.png',
            '/projects/images/FIGMA-DESIGN/frame1-desktop.png',
        ],
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Desarrollador de Software (Prácticas Profesionales)',
        company: 'UNSIS',
        duration: 'Jul 2025 – Sep 2025',
    },
];
