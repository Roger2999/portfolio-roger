import spaceTouristImg from "/images/Projects/SpaceTourist.webp";
import openWeatherImg from "/images/Projects/OpenWeather.webp";
import userManagementImg from "/images/Projects/UserManagementSystem.png";

export const projects = [
  {
    title: "User Management System",
    description:
      "Sistema para la gestión de cuentas de usuarios, construido con Next.js, Better Auth y Prisma.",
    image: userManagementImg,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Better Auth",
      "PostgreSQL",
      "shadcn/ui",
      "Zod",
    ],
    urlPreview: "https://sigel-eemtz.vercel.app",
    urlGithub: "https://github.com/Roger2999/user-management-system.git",
  },

  {
    title: "Countries Explorer",
    description:
      "Explorador de países con búsqueda por nombre, filtro por región y página de detalle con población, monedas, idiomas y países fronterizos, consumiendo la API REST Countries.",
    image: undefined,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "REST Countries API",
    ],
    urlPreview: "https://countries-explorer-nextjs.vercel.app",
    urlGithub: "https://github.com/Roger2999/countries-explorer-nextjs.git",
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
      "Vite",
      "Zustand",
      "OpenWeather API",
    ],
    urlPreview: "https://open-weather-cu.vercel.app/",
    urlGithub: "https://github.com/Roger2999/WeatherApp-v2.git",
  },
  {
    title: "Space Tourist",
    description:
      "Una experiencia inmersiva para explorar destinos espaciales, conocer a la tripulación y descubrir la tecnología utilizada en misiones espaciales.",
    image: spaceTouristImg,
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Zustand"],
    urlPreview: "https://space-tourist.vercel.app/",
    urlGithub: "https://github.com/Roger2999/Space-tourist-app.git",
  },
];
