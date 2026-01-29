import spaceTouristImg from "/images/Projects/SpaceTourist.webp";
import openWeatherImg from "/images/Projects/OpenWeather.webp";
import portfolioImg from "/images/Projects/webPortfolio.webp";
export const projects = [
  {
    title: "Space Tourist",
    description:
      "Una experiencia inmersiva para explorar destinos espaciales, conocer a la tripulación y descubrir la tecnología utilizada en misiones espaciales.",
    image: spaceTouristImg,
    stack: ["React", "TypeScript", "Tailwind CSS", " Vite", "Zustand"],
    urlPreview: "https://space-tourist.vercel.app/",
    urlGithub: "https://github.com/Roger2999/Space-tourist-app.git",
  },
  {
    title: "Open Weather",
    description:
      "Esta aplicación muestra el clima actual, pronósticos diarios y horarios, y permite cambiar entre unidades métricas e imperiales.",
    image: openWeatherImg,
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      " Vite",
      " Zustand",
      " OpenWeather API",
    ],
    urlPreview: "https://open-weather-cu.vercel.app/",
    urlGithub: "https://github.com/Roger2999/WeatherApp-v2.git",
  },
  {
    title: "Portfolio Website",
    description:
      "Sitio web personal para mostrar mis proyectos, habilidades y experiencia como desarrollador frontend.",
    image: portfolioImg,
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      " Zustand",
      " Supabase",
    ],
    urlPreview: "https://roger-web-portfolio.vercel.app/",
    urlGithub: "https://github.com/Roger2999/Portfolio-2.git",
  },
];
