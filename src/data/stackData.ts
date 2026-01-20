import tanstackQueryIcon from "../assets/react-query-icon.svg";
import javascriptIcon from "../assets/javascript-original.svg";
import typescriptIcon from "../assets/typescript-original.svg";
import reactIcon from "../assets/react-original.svg";
import npmIcon from "../assets/npm-original-wordmark.svg";
import pnpmIcon from "../assets/pnpm.svg";
import bootstrapIcon from "../assets/bootstrap-original.svg";
import viteIcon from "../assets/vite.svg";
import bunIcon from "../assets/bun.svg";
import materialUIIcon from "../assets/materialui.svg";
import daisyUIIcon from "../assets/daisyui.svg";
import tailwindIcon from "../assets/tailwind.svg";
import reactRouterIcon from "../assets/react-router.svg";
import reactHookFormIcon from "../assets/react-hook-form.svg";
import zodIcon from "../assets/zod.svg";
export const technologies = {
  lenguage: [
    {
      name: "JavaScript",
      icon: javascriptIcon,
      description:
        "Lenguaje de programación interpretado, orientado a objetos y multiplataforma.",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
      description: "Superset de JavaScript que añade tipado estático opcional.",
      url: "https://www.typescriptlang.org/",
    },
  ],

  libraries: [
    {
      name: "React",
      icon: reactIcon,
      description:
        "Biblioteca JavaScript para construir interfaces de usuario.",
      url: "https://reactjs.org/",
    },
  ],

  buildTools: [
    {
      name: "Vite",
      icon: viteIcon,
      description: "Herramienta de construcción frontend rápida y optimizada.",
      url: "https://vitejs.dev/",
    },
  ],

  packageManagers: [
    {
      name: "npm",
      icon: npmIcon,
      description: "Gestor de paquetes por defecto para Node.js.",
      url: "https://www.npmjs.com/",
    },
    {
      name: "pnpm",
      icon: pnpmIcon,
      description: "Gestor de paquetes rápido y eficiente en espacio de disco.",
      url: "https://pnpm.io/",
    },
    {
      name: "Bun",
      icon: bunIcon,
      description: "Runtime, gestor de paquetes y bundler todo en uno.",
      url: "https://bun.sh/",
    },
  ],

  uiFrameworks: [
    {
      name: "Material-UI",
      icon: materialUIIcon,
      description:
        "Framework de React que implementa Material Design de Google.",
      url: "https://mui.com/",
    },
    {
      name: "DaisyUI",
      icon: daisyUIIcon,
      description: "Framework de componentes para Tailwind CSS.",
      url: "https://daisyui.com/",
    },
    {
      name: "Tailwind CSS",
      icon: tailwindIcon,
      description:
        "Framework CSS utility-first para crear diseños personalizados rápidamente.",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: bootstrapIcon,
      description: "Framework CSS para desarrollo frontend responsive y móvil.",
      url: "https://getbootstrap.com/",
    },
  ],

  reactLibraries: [
    {
      name: "TanStack Query",
      icon: tanstackQueryIcon,
      description:
        "Librería para manejo de estado asíncrono, fetching y caching en React.",
      url: "https://tanstack.com/query",
    },
    {
      name: "React Router DOM",
      icon: reactRouterIcon,
      description:
        "Librería de enrutamiento para aplicaciones React en el navegador.",
      url: "https://reactrouter.com/",
    },
    {
      name: "React Hook Form",
      icon: reactHookFormIcon,
      description:
        "Librería para manejo eficiente de formularios en React con hooks.",
      url: "https://react-hook-form.com/",
    },
    {
      name: "Zod",
      icon: zodIcon,
      description: "Librería de validación de esquemas TypeScript-first.",
      url: "https://zod.dev/",
    },
  ],
};
