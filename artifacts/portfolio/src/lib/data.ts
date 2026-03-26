export const personalInfo = {
  name: "Indumathi Ramaraj",
  role: "Software Developer",
  tagline: "Crafting digital experiences that matter",
  bio: "Versatile Software Developer skilled in crafting intuitive UI, integrating complex APIs, and solving technical challenges with creative approaches. Experienced in leading teams, enhancing system efficiency, and driving product improvements across multiple projects. A dependable collaborator with a passion for innovation, performance optimization, and building user-centric digital experiences.",
  email: "induammu223@gmail.com",
  phone: "+91 9952356475",
  location: "Coimbatore, India",
  linkedin: "https://www.linkedin.com/in/indumathi-ramaraj/",
  github: "https://github.com/Indumathi-Ramaraj",
  resume: "/Indumathi_Ramaraj_Resume.pdf",
  stats: [
    { label: "Years Experience", value: 3, plus: true },
    { label: "Projects Completed", value: 20, plus: true },
    { label: "Technologies", value: 15, plus: true },
  ]
};

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux (Saga/Thunk)", "HTML5/CSS3", "Bootstrap", "TanStack Table"],
  backend: ["FastAPI", "Express.js", "Node.js", "RESTful APIs", "JWT Auth", "Swagger", "SQLAlchemy"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Azure Synapse"],
  tools: ["Docker", "AWS", "GitHub", "GitLab", "JIRA", "Figma", "Postman", "Microsoft Azure"]
};

export const projects = [
  {
    id: 1,
    title: "School Safety Dashboard",
    description: "Managed critical data for 300+ American school districts, ensuring compliance and client satisfaction. Developed and integrated front-end UI components with back-end APIs, optimized administrative workflows, and built RESTful APIs with FastAPI & Swagger.",
    category: "Full Stack",
    tech: ["React.js", "FastAPI", "Python", "PostgreSQL", "Docker", "AWS"],
    github: "#",
    live: "https://analytics.smartdatadashboard.com/login",
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    id: 2,
    title: "MyOps360 – Agility CRM",
    description: "Took full ownership of the Agility-CRM module at 834Labs (under HMG Technology). Led migration from Azure Synapse to PostgreSQL, integrated AI-driven APIs, implemented custom audio players and interactive UI elements for advanced automation features.",
    category: "Full Stack",
    tech: ["React.js", "TypeScript", "PostgreSQL", "Azure", "REST APIs"],
    github: "#",
    live: "https://myops360.834labs.com/login",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: 3,
    title: "TODO App – MERN Stack",
    description: "Full-stack MERN application for task management with complete CRUD functionality. Includes form validation, JWT authentication, WhatsApp/email/Telegram notifications. Frontend on Vercel, backend on Render with Swagger documentation.",
    category: "Full Stack",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    live: "https://mern-todo-app-tan.vercel.app/",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 4,
    title: "HelloFixy",
    description: "Web platform for household services that improved vendor-customer interactions and reduced booking time by 35%. Designed seamless booking flows and vendor management system.",
    category: "Frontend",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "https://hellofixy.com",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 5,
    title: "Kompres",
    description: "Spearheaded the modernization of a decade-old codebase, enhancing system performance by 45%, and successfully integrated THINGS BOARD for real-time data management.",
    category: "Full Stack",
    tech: ["React.js", "Things Board", "PostgreSQL", "REST APIs"],
    github: "#",
    live: "https://www.utvyakta.com/",
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    id: 6,
    title: "COVID-19 Plasma Donation Portal",
    description: "Directed the UX design and development to connect plasma donors with recipients, increasing accessibility by 50%. Built an intuitive platform during a critical period to help communities in need.",
    category: "Frontend",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
    github: "#",
    live: "#",
    color: "from-pink-500/20 to-rose-500/20"
  }
];

export const experience = [
  {
    id: 1,
    role: "Software Developer",
    company: "HMG Technology",
    period: "October 2022 - Present",
    current: true,
    description: "Managing critical data for 300+ American school districts. Developing and integrating front-end UI components with back-end APIs. Built RESTful APIs using SQLAlchemy in Python, deployed via Docker, and validated with FastAPI & Swagger. Conducted React.js training and led API testing initiatives. Also leading the Front-End team for 834Labs, managing development workflows, UI architecture, and feature delivery.",
    projects: ["School Safety Dashboard", "MyOps360 – Agility CRM"]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "BoostMyShop Pvt Ltd",
    period: "July 2021 - September 2022",
    current: false,
    description: "Developed seamless API integrations to facilitate real-time data synchronization. Built a robust chat feature to enhance communication between customers and market personnel, improving user experience and support efficiency.",
    projects: []
  },
  {
    id: 3,
    role: "Intern – Web Developer",
    company: "Octavalley",
    period: "December 2020 - January 2021",
    current: false,
    description: "Established responsive layouts through skilled use of HTML, CSS, and JavaScript.",
    projects: []
  }
];
