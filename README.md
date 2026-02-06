# 🚀 Roger Portfolio

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange)](https://github.com/pmndrs/zustand)

Portfolio web personal desarrollado con React 19 y TypeScript. Diseño moderno, animaciones fluidas y totalmente responsive.

🌐 **[Ver Demo en Vivo](https://roger-portfolio-web.vercel.app/)**

---

## ✨ Características

- 🌓 **Tema Claro/Oscuro** - Toggle dinámico con persistencia en localStorage
- 🎬 **Animaciones Fluidas** - Transiciones suaves con Motion (Framer Motion)
- 📱 **Diseño Responsive** - Adaptable a todos los dispositivos
- ⚡ **Alto Rendimiento** - Lazy loading de componentes y optimización de assets
- 🎯 **Navegación Intuitiva** - Menú sticky con scroll spy
- ♿ **Accesible** - Semántica HTML5 y atributos ARIA

---

## 🛠️ Tecnologías

### Core
- **React 19** - Biblioteca UI con últimas características
- **TypeScript 5.9** - Tipado estático para código robusto
- **Vite 7** - Build tool ultrarrápido con HMR

### Estilos
- **Tailwind CSS 4** - Framework CSS utility-first
- **CSS Modules** - Estilos scoped por componente

### Estado y Animaciones
- **Zustand 5** - Gestión de estado global ligero
- **Motion** - Animaciones declarativas para React

### Herramientas de Desarrollo
- **ESLint 9** - Linting con configuración moderna
- **SWC** - Compilación TypeScript ultra-rápida

---

## 📦 Instalación

### Requisitos
- Node.js 20+ o Bun 1.0+

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/Roger2999/portfolio-roger.git
cd portfolio-roger

# Instalar dependencias (con Bun recomendado)
bun install

# O con npm
npm install
```

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo con hot reload
bun run dev

# Build de producción
bun run build

# Preview del build
bun run preview

# Linting
bun run lint
```

---

## 📁 Estructura del Proyecto

```
portfolio-roger/
├── public/
│   ├── images/
│   │   ├── Projects/          # Capturas de proyectos
│   │   └── profile-photo.webp
│   └── portfolio.svg          # Favicon
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── BackToTopButton/
│   │   ├── ButtonLink/
│   │   ├── HamburgerButton/
│   │   ├── InViewAnimation/
│   │   ├── NavMenuDesktop/
│   │   ├── NavMenuMobile/
│   │   ├── ProjectCard/
│   │   ├── TechCard/
│   │   ├── ThemeButton/
│   │   ├── ThemeImg/
│   │   └── index.ts           # Barrel exports
│   ├── layouts/               # Layouts de página
│   │   ├── Aside.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Main.tsx
│   ├── hooks/                 # Custom hooks
│   │   ├── useIntersection.ts
│   │   ├── useScrollTopVisible.ts
│   │   └── useGetTechnologies.ts
│   ├── stores/                # Estado global (Zustand)
│   │   └── themeStore.ts
│   ├── data/                  # Datos estáticos
│   │   ├── navigation.ts
│   │   ├── projectsData.ts
│   │   └── stackData.ts
│   ├── helpers/               # Funciones utilitarias
│   ├── types/                 # Definiciones de tipos
│   ├── styles/                # Estilos globales
│   ├── PortfolioApp.tsx       # Componente principal
│   └── main.tsx               # Punto de entrada
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Proyectos Destacados

### 🚀 Space Tourist
Una experiencia inmersiva para explorar destinos espaciales, conocer a la tripulación y descubrir la tecnología utilizada en misiones espaciales.

**Stack:** React, TypeScript, Tailwind CSS, Vite, Zustand  
**Demo:** [space-tourist.vercel.app](https://space-tourist.vercel.app/)  
**Código:** [GitHub](https://github.com/Roger2999/Space-tourist-app.git)

---

### 🌤️ Open Weather
Aplicación del clima con pronósticos diarios y horarios, soporte para unidades métricas/imperiales.

**Stack:** React, TypeScript, Tailwind CSS, Vite, Zustand, OpenWeather API  
**Demo:** [open-weather-cu.vercel.app](https://open-weather-cu.vercel.app/)  
**Código:** [GitHub](https://github.com/Roger2999/WeatherApp-v2.git)

---

### 💼 Portfolio Website
Sitio web personal para mostrar proyectos, habilidades y experiencia como desarrollador frontend.

**Stack:** React, TypeScript, Tailwind CSS, Vite, Zustand, Supabase  
**Demo:** [roger-web-portfolio.vercel.app](https://roger-web-portfolio.vercel.app/)  
**Código:** [GitHub](https://github.com/Roger2999/Portfolio-2.git)

---

## 🎯 Stack Tecnológico

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Estado & Animaciones
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Herramientas
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

---

## 👤 Contacto

Desarrollado con ❤️ por **Roger**

- 🌐 Portfolio: [roger-portfolio-web.vercel.app](https://roger-portfolio-web.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/roger](https://linkedin.com/in/roger)
- 📧 Email: roger@example.com

---

<p align="center">
  <img src="https://img.shields.io/badge/Hecho%20con-React%20%2B%20TypeScript-blue?style=for-the-badge" alt="Made with React + TypeScript">
</p>
