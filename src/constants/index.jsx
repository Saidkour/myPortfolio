import project1 from "../assets/projects/homeheaderyoushop.webp";
import project14 from "../assets/projects/youshop3.webp";
import project12 from "../assets/projects/youshop1.webp";
import project13 from "../assets/projects/youshop2.webp";
import project2 from "../assets/projects/piemedical.webp";
import project21 from "../assets/projects/pie1.webp";
import project22 from "../assets/projects/pie2.webp";
import project3 from "../assets/projects/portfolio.webp";
import project4 from "../assets/projects/edusysimg.webp";
import project5 from "../assets/projects/movieapimg.webp";
import {
  SiApifox,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const CONSTANTS = {
  HERO_CONTENT: `Hi! 👋 I’m a passionate Full Stack Developer . My goal is to create innovative solutions that drive business growth 💡 while delivering exceptional user experiences. I’m motivated, flexible, and ready to bring your ideas to life! 🚀`,
  HERO_CONTENT_FR: `Salut! 👋 Je suis un développeur Full Stack passionné. Mon objectif est de créer des solutions innovantes qui stimulent la croissance des entreprises 💡 tout en offrant des expériences utilisateur exceptionnelles. Je suis motivé, flexible et prêt à donner vie à vos idées! 🚀`,
  ABOUT_TEXT: `As a passionate and versatile full-stack developer, I focus on creating efficient and user-friendly web applications. My expertise includes working with technologies like React.js, Node.js, Express, MongoDB, Laravel, and styling with CSS or Tailwind CSS. I am skilled in fixing bugs and managing errors, ensuring smooth and reliable performance in my projects. While I have learned Agile methodologies, including Scrum and JIRA, during my studies, I am eager to apply this knowledge in a professional setting. My journey in web development has been driven by a passion for problem-solving and a commitment to delivering high-quality solutions. Beyond coding, I stay active, explore new technologies, and contribute to open-source projects.`,
  ABOUT_TEXT_FR: `En tant que développeur full-stack passionné et polyvalent, je me concentre sur la création d'applications web efficaces et conviviales. Mon expertise inclut le travail avec des technologies telles que React.js, Node.js, Express, MongoDB, Laravel, et le stylisme avec CSS ou Tailwind CSS. Je suis compétent dans la correction de bugs et la gestion des erreurs, garantissant des performances fluides et fiables dans mes projets. Bien que j'aie appris les méthodologies Agile, y compris Scrum et JIRA, au cours de mes études, je suis impatient d'appliquer ces connaissances dans un cadre professionnel. Mon parcours en développement web a été motivé par une passion pour la résolution de problèmes et un engagement à fournir des solutions de haute qualité. Au-delà du codage, je reste actif, explore de nouvelles technologies et contribue à des projets open-source.`,
  Education: [
    {
      year: "2022-2024",
      title: "Diploma in Digital Development option Web Full Stack",
      institution: "OFPPT",
      description:
        "Successfully completed a diploma program in Digital Development at OFPPT.",
    },
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
      title: "Baccalaureate in Physics",
      institution: "Lycée Eljadida Tafraout",
      description: "",
    },
  ],
  Education_FR: [
    {
      year: "2022-2024",
      title:
        "Technicien spécialisé en Développement Digital option Web Full Stack",
      institution: "OFPPT-Tafraout",
      description:
        "Programme de diplôme en Développement Digital complété avec succès à l'OFPPT.",
    },
    {
      year: "2019-2021",
      title:
        "Licence en Physique avec une spécialisation en Électronique et Systèmes Embarqués",
      institution: "FSAAM - Université Ibn Zohr",
      description:
        "Obtention d'une Licence en Physique avec une spécialisation en Électronique et Systèmes Embarqués.",
    },
    {
      year: "2017-2019",
      title: "DEUG en Physique",
      institution: "FSAAM - Université Ibn Zohr",
      description:
        "Obtention du Diplôme d'Études Universitaires Générales (DEUG) en Physique.",
    },
    {
      year: "2016-2017",
      title: "Baccalauréat en Physique",
      institution: "Lycée Eljadida Tafraout",
      description: "",
    },
  ],
  EXPERIENCE: [
    {
      year: "Mai-2024",
      role: "Full Stack Developer (Internship)",
      company: "Health Center - Tafraout",
      description: `As a team member, developed and maintained web applications using JavaScript, React.js, and Node.js. Created RESTful APIs with Express.js and integrated MongoDB databases. Collaborated with stakeholders to define project requirements and timelines. Contributed to building a dashboard for managing children's vaccinations, including features for recording, tracking, and managing vaccination data efficiently. Additionally, implemented templates with React.js to enhance user experience and interface functionality.`,
      technologies: [
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiNodedotjs className="text-green-500 h-7 w-7" />,
        <SiRedux className="text-indigo-600 h-7 w-7" />,
        <SiExpress className="text-black-500 h-7 w-7" />,
        <SiMongodb className="text-green-500 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
        <SiPostman className="text-yellow-900 h-7 w-7" />,
      ],
    },
  ],
  EXPERIENCE_FR: [
    {
      year: "Mai-2024",
      role: "Développeur Full Stack (Stage)",
      company: "Centre de Santé - Tafraout",
      description: `En tant que membre de l'équipe, j'ai développé et maintenu des applications web utilisant JavaScript, React.js et Node.js. J'ai créé des API RESTful avec Express.js et intégré des bases de données MongoDB. J'ai collaboré avec les parties prenantes pour définir les exigences et les délais des projets. J'ai contribué à la création d'un tableau de bord pour la gestion des vaccinations des enfants, incluant des fonctionnalités pour enregistrer, suivre et gérer les données de vaccination de manière efficace. De plus, j'ai implémenté des modèles avec React.js pour améliorer l'expérience utilisateur et la fonctionnalité de l'interface.`,
      technologies: [
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiNodedotjs className="text-green-500 h-7 w-7" />,
        <SiExpress className="text-black-500 h-7 w-7" />,
        <SiMongodb className="text-green-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiRedux className="text-indigo-600 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
        <SiPostman className="text-yellow-900 h-7 w-7" />,
      ],
    },
  ],
  PROJECTS: [
    {
      title: "E-Commerce Website",
      image: [project1, project12, project13, project14],
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiNodedotjs className="text-green-500 h-7 w-7" />,
        <SiExpress className="text-black-500 h-7 w-7" />,
        <SiMongodb className="text-green-500 h-7 w-7" />,
        <SiPostman className="text-yellow-900 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: "https://you-shop-ecom.netlify.app/",
      repo: "https://github.com/Saidkour/you-shop-pro",
    },
    {
      title: "Hospital Vaccination Management System",
      image: [project2, project21, project22],
      description:
        "An integrated platform that streamlines the administration and monitoring of vaccinations in a hospital setting, enhancing efficiency and patient care.",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiNodedotjs className="text-green-500 h-7 w-7" />,
        <SiExpress className="text-black-500 h-7 w-7" />,
        <SiMongodb className="text-green-500 h-7 w-7" />,
        <SiPostman className="text-yellow-900 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: "https://pie-medical.netlify.app/",
      repo: "https://github.com/Saidkour/pie_medical",
    },
    {
      title: "School Registration Management",
      image: [project4],
      description:
        "Designed and implemented a comprehensive school management system with CRUD functionalities for students and professors. Includes user account management features such as login, registration, account settings, and password changes. Focused on creating an efficient and user-friendly platform for managing educational records.",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiLaravel className="text-red-500 h-7 w-7" />,
        <SiMysql className="text-blue-400 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: false,
      repo: "https://github.com/Saidkour/projetschools",
    },
    {
      title: "Exploring and Viewing Movie Details",
      image: [project5],
      description:
        "A platform for discovering and exploring movies, featuring an intuitive landing page where users can browse through a curated list of films. Each movie has its own detailed page, populated with data fetched from an external API, providing rich information such as synopsis, cast, release date, and ratings. This project highlights my expertise in API integration, dynamic content rendering, and user-friendly interface design",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
      ],
      demo: "https://kourbisse-cima.netlify.app/",
      repo: "https://github.com/Saidkour/KourbisseCima",
    },
    {
      title: "Portfolio Website",
      image: [project3],
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: [
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: "https://saidkourbisse.netlify.app/",
      repo: "https://github.com/Saidkour/myPortfolio",
    },
  ],
  PROJECTS_FR: [
    {
      title: "Site E-Commerce",
      image: [project1, project12, project13, project14],
      description:
        "Un site e-commerce entièrement fonctionnel avec des fonctionnalités telles que la liste de produits, le panier d'achat,",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiNodedotjs className="text-green-500 h-7 w-7" />,
        <SiExpress className="text-black-500 h-7 w-7" />,
        <SiMongodb className="text-green-500 h-7 w-7" />,
        <SiPostman className="text-yellow-900 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: "https://you-shop-ecom.netlify.app/",
      repo: "https://github.com/Saidkour/you-shop-pro",
    },
    {
      title: "Système de Gestion de la Vaccination Hospitalière",
      image: [project2, project21, project22],
      description:
        "Une plateforme intégrée qui rationalise l'administration et la surveillance des vaccinations dans un cadre hospitalier, améliorant ainsi l'efficacité et les soins aux patients.",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiNodedotjs className="text-green-500 h-7 w-7" />,
        <SiExpress className="text-black-500 h-7 w-7" />,
        <SiMongodb className="text-green-500 h-7 w-7" />,
        <SiPostman className="text-yellow-900 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: "https://pie-medical.netlify.app/",
      repo: "https://github.com/Saidkour/pie_medical",
    },
    {
      title: "Gestion des Inscriptions Scolaires",
      image: [project4],
      description:
        "Conçu et implémenté un système de gestion scolaire complet avec des fonctionnalités CRUD pour les étudiants et les professeurs. Inclut des fonctionnalités de gestion des comptes utilisateur telles que la connexion, l'inscription, les paramètres de compte et les changements de mot de passe. Axé sur la création d'une plateforme efficace et conviviale pour la gestion des dossiers éducatifs.",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiLaravel className="text-red-500 h-7 w-7" />,
        <SiMysql className="text-blue-400 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: false,
      repo: "https://github.com/Saidkour/projetschools",
    },
    {
      title: "Exploration et Visualisation des Détails des Films",
      image: [project5],
      description:
        "Une plateforme pour découvrir et explorer des films, avec une page d'accueil intuitive où les utilisateurs peuvent parcourir une liste de films sélectionnés. Chaque film a sa propre page détaillée, remplie de données récupérées à partir d'une API externe, fournissant des informations riches telles que le synopsis, le casting, la date de sortie et les évaluations. Ce projet met en avant mon expertise en intégration d'API, rendu de contenu dynamique et conception d'interface utilisateur conviviale.",
      technologies: [
        <SiHtml5 className="text-red-500 h-7 w-7" />,
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
      ],
      demo: "https://kourbisse-cima.netlify.app/",
      repo: "https://github.com/Saidkour/KourbisseCima",
    },
    {
      title: "Site Portfolio",
      image: [project3],
      description:
        "Un site portfolio personnel présentant des projets, des compétences et des informations de contact.",
      technologies: [
        <SiReact className="text-blue-500 h-7 w-7" />,
        <SiTailwindcss className="text-blue-500 h-7 w-7" />,
        <SiGit className="text-red-500 h-7 w-7" />,
      ],
      demo: "https://saidkourbisse.netlify.app/",
      repo: "https://github.com/Saidkour/myPortfolio",
    },
  ],
  CONTACT: {
    address: "Agadir,Maroc ",
    phoneNo: "+212 6 79 08 08 17",
    email: "saidkourbisse@gmail.com",
  },
};
