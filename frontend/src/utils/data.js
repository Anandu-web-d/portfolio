// ============================================================
// Portfolio Data — Anandu A (Myles) — Clean Professional Version
// ============================================================

export const personalInfo = {
  name: "Anandu A",
  alias: "Myles",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer focused on building scalable, modern web applications.",
  location: "Kerala, India",
  email: "anandusachu1180@gmail.com",
  phone: "+91 7736707197",
  education: "BCA — SB College",
  github: "https://github.com/Anandu-web-d",
  linkedin: "https://www.linkedin.com/in/anandu-a-697205269?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "https://www.instagram.com/anandu.______?igsh=MWlna3RmeHhsYXJmcg==",
  resumeUrl: "/resume.pdf",
};

export const heroData = {
  greeting: "Hi, I'm Anandu",
  heading: "Building Modern Digital Experiences",
  subheading:
    "BCA Student & Full Stack Developer building modern web apps with MERN and AI integrations.",
  typingWords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Integration Developer",
    "Creative Developer",
  ],
};

export const aboutData = {
  description: [
    "I'm Anandu A, a developer from Kerala with a strong foundation in full stack web development. I enjoy building applications that are clean, fast, and actually useful.",
    "My work spans from designing responsive UIs to building RESTful APIs and connecting them to databases. I take pride in writing code that's readable, structured, and easy to maintain.",
    "When I'm not coding, you'll find me exploring UI/UX design, keeping up with tech, or staying active.",
  ],
  traits: [
    { label: "Fast Learner" },
    { label: "Creative Thinker" },
    { label: "Problem Solver" },
    { label: "Detail Oriented" },
    { label: "Team Player" },
    { label: "Self-Driven" },
  ],
  interests: [
    "UI/UX Design",
    "Open Source",
    "Cricket",
    "Traveling",
    "Creative Branding",
    "Tech Innovation",
  ],
  stats: [
    { value: "4+", label: "Projects Built" },
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Technologies" },
    { value: "BCA", label: "Education" },
  ],
};

export const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "Authentication"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase Integration"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "Java", "C", "Dart"],
  },
  {
    category: "Tools",
    skills: ["Git & GitHub", "VS Code", "Figma", "Postman", "Canva"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Flutter App Development Intern",
    company: "Mobile Development Internship",
    type: "Internship",
    period: "2023 — 2024",
    description:
      "Worked on Flutter-based mobile application development, building UI components and integrating backend features.",
    responsibilities: [
      "Built responsive mobile UI screens using Flutter widgets",
      "Implemented navigation, layouts, and state management",
      "Integrated REST APIs and backend services",
      "Improved app performance and user experience",
      "Collaborated with the team on feature planning and delivery",
    ],
  },
  {
    id: 2,
    role: "Operations & Customer Support",
    company: "E-Commerce Center",
    type: "Work Experience",
    period: "1 Year",
    description:
      "Hands-on experience in customer handling and operational workflows in an e-commerce environment.",
    responsibilities: [
      "Customer interaction and query resolution",
      "Order management and processing",
      "Digital workflow and platform support",
      "Problem solving in a fast-paced environment",
      "Team coordination and communication",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CampusConnect",
    subtitle: "College Management Platform",
    type: "Full Stack Web App",
    category: "web",
    featured: true,
    metric: { value: "Real-time", label: "Hall booking system" },
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "A college event and hall management platform that streamlines communication, event handling, and auditorium booking inside campuses.",
    features: [
      "Real-time hall booking with live availability",
      "Event management with category organization",
      "Admin dashboard with full control panel",
      "User authentication and role management",
      "Feedback management system",
    ],
    github: "https://github.com/Anandu-web-d",
    demo: "#",
  },
  {
    id: 2,
    title: "AI Digital Library",
    subtitle: "Smart Learning Platform",
    type: "AI-Based Web App",
    category: "ai",
    featured: true,
    metric: { value: "40% faster", label: "Load time vs baseline" },
    techStack: ["React", "Node.js", "MongoDB", "AI APIs"],
    description:
      "An AI-powered digital learning platform focused on smarter education access and intelligent resource organization.",
    features: [
      "Smart resource management and organization",
      "AI-assisted search and recommendations",
      "Personalized learning dashboard",
      "Organized content categorization",
    ],
    github: "https://github.com/Anandu-web-d",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "Personal Brand Platform",
    type: "Frontend Web App",
    category: "web",
    featured: false,
    metric: null,
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
    description:
      "A professional personal portfolio website built with modern UI/UX principles, responsive layouts, and smooth interactions.",
    features: [
      "Clean responsive design across all devices",
      "Contact form with backend integration",
      "Interactive project showcase",
      "Resume download feature",
    ],
    github: "https://github.com/Anandu-web-d",
    demo: "#",
  },
  {
    id: 4,
    title: "Flutter Mobile Apps",
    subtitle: "Cross-Platform Applications",
    type: "Mobile App",
    category: "mobile",
    featured: false,
    metric: null,
    techStack: ["Flutter", "Dart", "Firebase"],
    description:
      "Cross-platform mobile applications with clean UI, smooth navigation, and Firebase backend integrations built during internship.",
    features: [
      "iOS & Android support",
      "Clean modern UI design",
      "Firebase authentication",
      "Smooth navigation and transitions",
    ],
    github: "https://github.com/Anandu-web-d",
    demo: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Krishnan",
    role: "Project Mentor — SB College",
    initials: "RK",
    rating: 5,
    quote:
      "Anandu has an exceptional ability to deliver clean, well-structured code. His CampusConnect project was impressive — real-time booking with a polished UI rarely seen at this level.",
  },
  {
    id: 2,
    name: "Sneha Mohan",
    role: "Team Lead — Internship",
    initials: "SM",
    rating: 5,
    quote:
      "Working with Anandu during the Flutter internship was a great experience. He picks up new concepts fast, writes maintainable code, and always delivers on time.",
  },
  {
    id: 3,
    name: "Abhijith Nair",
    role: "Classmate & Collaborator",
    initials: "AN",
    rating: 5,
    quote:
      "Anandu's AI Digital Library project blew us all away. He integrated smart recommendations seamlessly. His attention to performance and UI detail is top notch.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
