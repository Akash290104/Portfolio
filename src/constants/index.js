import project1 from "../assets/projects/lms.png";
import project2 from "../assets/projects/chatApp.png";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer and college student who loves building dynamic web applications and solving complex problems through competitive programming. 
With a keen eye for innovation, I strive to create efficient and scalable solutions that enhance user experiences.`;

export const ABOUT_TEXT = `Hello there! 👋 I'm a pre-final year B.Tech. student at the Indian Institute of Information Technology (IIIT) Ranchi, specializing in Computer Science and Engineering.

I have a passion for full-stack development, competitive programming, and crafting efficient, scalable solutions. When I'm not lost in code, you’ll find me traveling to new places, getting lost in a good book, or exploring new ideas.

I thrive in dynamic environments where I can grow, collaborate with like-minded people, and chill when needed.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Learning Management System(LMS)",
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
    title: "Talk-A-Tive",
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
  },
];

export const CONTACT = {
  address: "Maharajganj, Uttar Pradesh",
  phoneNo: "+91-8874923563",
  email: "mishra.ak801@gmail.com",
};
