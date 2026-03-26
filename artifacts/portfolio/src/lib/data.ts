export const personalInfo = {
  name: "Indumathi Ramaraj",
  role: "Full Stack Developer",
  tagline: "Crafting digital experiences that matter",
  bio: "I am a passionate Full Stack Developer and UI/UX enthusiast based in India. I specialize in building exceptional digital experiences, combining robust backend architectures with stunning, user-centric interfaces. With a strong foundation in modern web technologies, I transform complex problems into elegant, scalable solutions.",
  email: "indumathiramaraj@gmail.com",
  linkedin: "https://www.linkedin.com/in/indumathi-ramaraj/",
  github: "https://github.com",
  resume: "https://www.canva.com/design/DAGeItAK6e8/zOcSjizus8wtxPcqKwiJOA/",
  stats: [
    { label: "Years Experience", value: 3, plus: true },
    { label: "Projects Completed", value: 20, plus: true },
    { label: "Technologies", value: 15, plus: true },
  ]
};

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js", "HTML5/CSS3"],
  backend: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  tools: ["Git & GitHub", "Docker", "Figma", "AWS Basics", "Postman", "VS Code"]
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "An intelligent productivity app featuring real-time collaboration, AI-driven task prioritization, and automated workflow suggestions.",
    category: "Full Stack",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A high-performance modern e-commerce solution with seamless Stripe integration, inventory management, and an admin dashboard.",
    category: "Full Stack",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 3,
    title: "Social Analytics Dashboard",
    description: "Real-time data visualization dashboard aggregating metrics from multiple social platforms with customizable reporting.",
    category: "Frontend",
    tech: ["React", "Recharts", "Redux", "Tailwind CSS"],
    github: "#",
    live: "#",
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "HMGTechnology Pvt Ltd",
    period: "2022 - Present",
    description: "Leading the development of enterprise-scale web applications. Architected and deployed microservices using React, Node.js, and PostgreSQL, improving system performance and scalability for production environments."
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "BoostMyShop",
    period: "2020 - 2022",
    description: "Developed interactive, highly responsive user interfaces for e-commerce solutions. Built and maintained robust frontend features using React and TypeScript, delivering seamless shopping experiences for global clients."
  }
];
