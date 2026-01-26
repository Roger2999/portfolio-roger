import spaceTouristImg from "../assets/Projects/SpaceTourist.webp";
import openWeatherImg from "../assets/Projects/OpenWeather.webp";
import portfolioImg from "../assets/Projects/webPortfolio.webp";
export const projects = [
  {
    title: "Space Tourist",
    description:
      "Sustainable online store that connects local entrepreneurs with conscious consumers. Includes shopping cart, payment gateway, and admin dashboard.",
    image: spaceTouristImg,
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    urlPreview: "https://space-tourist.vercel.app/",
    urlGithub: "https://github.com/Roger2999/Space-tourist-app.git",
  },
  {
    title: "Open Weather",
    description:
      "Collaborative task manager with Kanban boards, real-time notifications, and productivity metrics for agile teams.",
    image: openWeatherImg,
    stack: ["Vue 3", "Express", "PostgreSQL", "Socket.io", "Vuetify"],
    urlPreview: "https://open-weather-cu.vercel.app/",
    urlGithub: "https://github.com/Roger2999/WeatherApp-v2.git",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and experience. Responsive design with dark/light mode toggle and contact form integration.",
    image: portfolioImg,
    stack: ["Flutter", "Dart", "Firebase", "Charts"],
    urlPreview: "https://roger-web-portfolio.vercel.app/",
    urlGithub: "https://github.com/Roger2999/Portfolio-2.git",
  },
];
