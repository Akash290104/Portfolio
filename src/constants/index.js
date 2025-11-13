import project1 from "../assets/projects/lms.png";
import project2 from "../assets/projects/chatApp.png";
import project3 from "../assets/projects/storeit.png";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer and college student who loves building dynamic web applications and solving complex problems through competitive programming. 
With a keen eye for innovation, I strive to create efficient and scalable solutions that enhance user experiences.`;

export const ABOUT_TEXT = `Hello there! 👋 I'm a pre-final year B.Tech. student at the Indian Institute of Information Technology (IIIT) Ranchi, specializing in Computer Science and Engineering.

I have a passion for full-stack development, competitive programming, and crafting efficient, scalable solutions. When I'm not lost in code, you’ll find me traveling to new places, getting lost in a good book, or exploring new ideas.

I thrive in dynamic environments where I can grow, collaborate with like-minded people, and chill when needed.`;

export const EXPERIENCE = [
  {
    company: "Agility AI Pvt Ltd",
    role: "Full-Stack Intern",
    duration: "May 2025 - June 2025",
    points: [
      "Developed 7+ AI-powered games, and 30+ mini-games using React and Tailwind for 500+ students.",
      "Built advanced gameplay with drag-and-drop using hello-pangea/dnd, real-time fall, and power-ups and added data visualization and animations using Chart.js, Recharts, Framer Motion and Canvas API.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Indian Institute of Information Technology, Ranchi",
    year: "2022 - 2026",
    grade: "7.95 CGPA",
  },
  {
    degree: "Senior Secondary",
    institute: "G.N. National Public School, Gorakhpur",
    year: "2021",
    grade: "96.8%",
  },
];

export const PROJECTS = [
  {
    title: "Learning Management System(LMS)",
    repo: "https://github.com/Akash290104/Learning-Management-System-LMS-",
    live: "https://learning-management-system-lms-gray.vercel.app",
    image: project1,
    description:
      "An interactive web application for managing e-learning experiences for students and educators.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "JavaScript",
      "Mongoose",
      "Socket.IO",
      "Cloudinary",
    ],
  },
  {
    title: "StoreIt",
    repo: "https://github.com/Akash290104/StoreIt",
    live: "https://store-it-sooty-three.vercel.app/",
    image: project3,
    description:
      "A robust and secure cloud storage and file management application.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Appwrite",
      "Zod",
    ],
  },
  
    {
    title: "Talk-A-Tive",
    repo: "https://github.com/Akash290104/Final-Chat-Application",
    live: "https://final-chat-application-xi.vercel.app/",
    image: project2,
    description:
      "A real-time chat application for online chats, group chat creation, group name updates, and member management.",
    technologies: [
      "Express.js",
      "Node.js",
      "React.js",
      "Shadcn - UI",
      "Mongoose",
      "JavaScript",
      "Cloudinary",
    ],
  }
];

export const CONTACT = {
  address: "Ranchi, Jharkhand",
  phoneNo: "+91-8874923563",
  email: "mishra.ak801@gmail.com",
};
