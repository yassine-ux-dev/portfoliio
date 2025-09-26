import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  GitAlt,
  FaMarkdown,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSocketdotio,
  SiHeroku,
  SiNetlify,
  SiStyledcomponents,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiExpress,
  SiChakraui,
  SiJsonwebtokens,
  SiBootstrap,
  SiAdobeaftereffects,
  SiDotnet,
  SiBlazor,
  SiAdobeillustrator, // Added correct import for Adobe Illustrator
} from "react-icons/si";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

const navLinks = [
  {
    name: "home",
    url: "#",
  },
  {
    name: "projects",
    url: "#projects",
  },
  {
    name: "contact",
    url: "#contact",
  },
];

const themes = [
  {
    name: "blue",
    color: "#2a93ec",
  },
  {
    name: "darkpurple",
    color: "#7952b3",
  },
  {
    name: "pink",
    color: "#ff69b4",
  },
  {
    name: "silvergrey",
    color: "#C0C0C0",
  },
];

const socials = [
  {
    name: "github",
    url: "https://github.com/varunKT001/",
    icon: <FaGithub />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/people/Varun-Tiwari/100057310502325/",
    icon: <FaFacebookF />,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/varunkt001",
    icon: <FaLinkedinIn />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/varuntiwari55/",
    icon: <FaInstagram />,
  },
];

const languages = [
  {
    name: "tailwind",
    icon: <SiTailwindcss />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "SqlServer",
    icon: <FaDatabase />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "Csharp",
    icon: <SiDotnet />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "blazor",
    icon: <SiBlazor />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "dotnet",
    icon: <SiDotnet />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "javascript",
    icon: <SiJavascript />,
    color: "#f0db4f",
    desc: "JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.",
  },
  {
    name: "react",
    icon: <SiReact />,
    color: "#61DBFB",
    desc: "React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.",
  },
  {
    name: "nodejs",
    icon: <FaNodeJs />,
    color: "#68a063",
    desc: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services",
  },
  {
    name: "html5",
    icon: <SiHtml5 />,
    color: "#e34c26",
    desc: "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.",
  },
  {
    name: "css3",
    icon: <SiCss3 />,
    color: "#264de4",
    desc: "CSS (Cascading Style Sheets) is used to style and layout web pages",
  },
  {
    name: "postgres",
    icon: <SiPostgresql />,
    color: "#0064a5",
    desc: "PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL and JSON querying. It is used as the primary data store or data warehouse for many web, mobile application.",
  },
  {
    name: "expressjs",
    icon: <SiExpress />,
    color: "#ffffff",
    desc: "ExpressJS is a javascript library. The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.",
  },

  {
    name: "github",
    icon: <FaGithub />,
    color: "#ffffff",
    desc: "Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.",
  },
  {
    name: "heroku",
    icon: <SiHeroku />,
    color: "#6567a5",
    desc: "Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps.",
  },
  {
    name: "netlify",
    icon: <SiNetlify />,
    color: "#00C7B7",
    desc: "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.",
  },
  {
    name: "socketio",
    icon: <SiSocketdotio />,
    color: "#ffffff",
    desc: "Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.",
  },
  {
    name: "markdown",
    icon: <FaMarkdown />,
    color: "#ffffff",
    desc: "A lightweight markup language for creating formatted text using a plain-text editor.",
  },
  {
    name: "styled components",
    icon: <SiStyledcomponents />,
    color: "#ffb6c1",
    desc: "Use the best bits of ES6 and CSS to style your apps without stress",
  },
  {
    name: "mongodb",
    icon: <SiMongodb />,
    color: "#589636",
    desc: "MongoDB is a document database used to build highly available and scalable internet applications.",
  },
  {
    name: "firebase",
    icon: <SiFirebase />,
    color: "#ffcb2b",
    desc: "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
  },
  {
    name: "stripe",
    icon: <SiStripe />,
    color: "#008cdd",
    desc: "Stripe allows business owners to accept payments from credit and debit cards and processes those payments.",
  },
  {
    name: "chakraui",
    icon: <SiChakraui />,
    color: "#319795",
    desc: "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
  },
  {
    name: "jwt",
    icon: <SiJsonwebtokens />,
    color: "#d63aff",
    desc: "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.",
  },
  {
    name: "cloudinary",
    icon: <BsFillCloudArrowUpFill />,
    color: "#3448c5",
    desc: "Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery.",
  },
  {
    name: "bootstrap",
    icon: <SiBootstrap />,
    color: "#563d7c",
    desc: "Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages",
  },
  {
    name: "figma",
    icon: <FaFigma />,
    color: "#6a0dad",
    desc: "Figma is a powerful design tool that helps you to create anything: websites, applications, logos, and much more.",
  },
  {
    name: "adobe illustrator",
    icon: <SiAdobeillustrator />, // Fixed: Changed from SiAdobeaftereffects to SiAdobeillustrator
    color: "#FF9A00",
    desc: "Adobe Illustrator is the industry standard design app that lets you capture your creative vision with shapes, color, effects, and typography.",
  },
];

const projects = [
  {
    name: "tomper chat",
    image: "/Project2.jpg",
    github_url: "https://github.com/yassine-ux-dev/Gang-store",
    site_url: "/Gang.webm",
    desc: "Gang Store is an E-commerce Web application for small bussiness owners who want to expand their bussiness by providing an online purchase solution to their customers .",
    stack: ["javascript", "mongodb", "expressjs", "react", "nodejs", "jwt"],
    featured: true,
  },
  {
    name: "tomper wear",
    image: "/Project1.jpeg",
    github_url: "https://github.com/varunKT001/tomper-wear-ecommerce",
    site_url: "/Video.mp4",
    desc: "Assurence Web application for tender management, allowing organizations to publish tenders and manage the complete proposal lifecycle.",
    stack: ["dotnet", "blazor", "Csharp", "SqlServer"],
    featured: true,
  },

  {
    name: "tomper notes",
    image: "/Project3.jpeg",
    github_url: "https://github.com/yassine-ux-dev/Aqoot-Service",
    site_url: "/Aqoot.mp4",

    desc: "Aqoot: the interface of a showcase website for a group of servers specializing in wedding events.",
    stack: ["tailwind", "react", "javascript"],
    featured: false,
  },
];

export { navLinks, themes, socials, languages, projects };
