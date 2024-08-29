import project1 from "../assets/projects/homeheaderyoushop.png";
import project2 from "../assets/projects/piemedical.png";
import project3 from "../assets/projects/prtfolioimg.png";
import project4 from "../assets/projects/edusysimg.png";
import project5 from "../assets/projects/movieapimg.png";

export const HERO_CONTENT = `Hi! 👋 I’m a passionate Full Stack Developer . My goal is to create innovative solutions that drive business growth 💡 while delivering exceptional user experiences. I’m motivated, flexible, and ready to bring your ideas to life! 🚀`;

export const ABOUT_TEXT = `As a passionate and versatile full-stack developer, I focus on creating efficient and user-friendly web applications. My expertise includes working with technologies like React.js, Node.js, Express, MongoDB, Laravel, and styling with CSS and Tailwind. I am skilled in fixing bugs and managing errors, ensuring smooth and reliable performance in my projects. While I have learned Agile methodologies, including Scrum and JIRA, during my studies, I am eager to apply this knowledge in a professional setting. My journey in web development has been driven by a passion for problem-solving and a commitment to delivering high-quality solutions. Beyond coding, I stay active, explore new technologies, and contribute to open-source projects.`;
export const Education = [
  {
    year: "2022-2024",
    title: "Diploma in Digital Development option Web Full Stack",
    institution: "OFPPT",
    description:
      "Successfully completed a diploma program in Digital Development at OFPPT.",
  },
  // {
  //   year: "2022",
  //   title:
  //     "High School Diploma (Baccalauréat) in Life Sciences and Earth Sciences (SVT)",
  //   institution: "LIbre",
  //   description:
  //     "Achieved a High School Diploma (Baccalauréat) with a focus on Life Sciences and Earth Sciences.",
  // },
  {
    year: "2019-2021",
    title:
      "Licence in Physics with a focus on Electronics and Embedded Systems",
    institution: "University Ibn Zohr",
    description:
      "Obtained a Licence in Physics with a specialization in Electronics and Embedded Systems.",
  },

  {
    year: "2017-2019",
    title: "DEUG in Physics",
    institution: "University Ibn Zohr",
    description:
      "Completed the Diplôme d'Études Universitaires Générales (DEUG) in Physics.",
  },

  {
    year: "2016-2017",
    title: "Bachelor's Degree in Physics",
    institution: "Lycée Eljadida Tafraout",
    description: "Received a Bachelor's degree in Physics.",
  },
];
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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart,",
    technologies: [
      "HTML",
      "TailwindCSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: false,
    repo: "https://github.com/Saidkour/you-shop-pro",
  },
  {
    title: "Hospital Vaccination Management System",
    image: project2,
    description:
      "An integrated platform that streamlines the administration and monitoring of vaccinations in a hospital setting, enhancing efficiency and patient care.",
    technologies: [
      "HTML",
      "TailwindCSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: false,
    repo: "https://github.com/Saidkour/pie_medical",
  },
  {
    title: "School Registration Management",
    image: project4,
    description:
      "Designed and implemented a comprehensive school management system with CRUD functionalities for students and professors. Includes user account management features such as login, registration, account settings, and password changes. Focused on creating an efficient and user-friendly platform for managing educational records.",
    technologies: ["HTML", "TailwindCSS", "React.js", "Laravel", "mySQL"],
    demo: false,
    repo: "https://github.com/Saidkour/projetschools",
  },
  {
    title: "Exploring and Viewing Movie Details",
    image: project5,
    description:
      "A platform for discovering and exploring movies, featuring an intuitive landing page where users can browse through a curated list of films. Each movie has its own detailed page, populated with data fetched from an external API, providing rich information such as synopsis, cast, release date, and ratings. This project highlights my expertise in API integration, dynamic content rendering, and user-friendly interface design",
    technologies: ["HTML", "React", "TailwindCSS"],
    demo: "https://kourbisse-cima.netlify.app/",
    repo: "https://github.com/Saidkour/KourbisseCima",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "TailwindCSS"],
    demo: "https://saidkourbisse.netlify.app/",
    repo: "https://github.com/Saidkour/myPortfolio",
  },
];

export const CONTACT = {
  address: "Tafraoute,Maroc ",
  phoneNo: "+212 6 79 08 08 17",
  email: "saidkourbisse@gmail.com",
};
