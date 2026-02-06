# Guía Completa de Problemas y Convenciones - Portfolio Roger

Este documento unifica toda la información de problemas conocidos, convenciones y mejores prácticas para trabajar en este proyecto.

## 🏗️ Arquitectura del Proyecto

- **Framework:** React 19 + TypeScript 5.9
- **Build Tool:** Vite 7
- **Estilos:** Tailwind CSS 4
- **Estado Global:** Zustand
- **Animaciones:** Motion (Framer Motion)
- **Gestor de Paquetes:** Bun (preferido)

## 📝 Convenciones de Código

### Imports

```typescript
// ✅ Orden correcto:
1. React/hooks de React
2. Librerías de terceros (motion, zustand)
3. Componentes locales (barrel exports)
4. Hooks personalizados
5. Utilidades/helpers
6. Tipos
7. Estilos/CSS

// Ejemplo:
import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { ButtonLink } from "./components";
import { useThemeStore } from "./stores/themeStore";
import type { Project } from "./types";
import "./styles.css";
```

### Nombres de Archivos

- Componentes: `PascalCase.tsx` (ej: `ThemeButton.tsx`)
- Hooks: `camelCase.ts` con prefijo `use` (ej: `useIntersection.ts`)
- Utilidades: `camelCase.ts` (ej: `getButtonThemeClasses.ts`)
- Tipos: `camelCase.ts` (ej: `technologies.ts`)

### Nombres de Carpetas

- **kebab-case** preferido
- Componentes: dentro de carpetas con su nombre (ej: `ThemeButton/ThemeButton.tsx`)

## ⚠️ PROBLEMAS CRÍTICOS

### 1. ✅ SOLUCIONADO - Ruta de imagen incorrecta

**Archivo:** `src/layouts/Main.tsx:18`
**Estado:** RESUELTO - Ya está corregido a `/images/profile-photo.webp`

### 2. ❌ PENDIENTE - Export de componente inexistente en barrel

**Archivo:** `src/components/index.ts:11`  
**Problema:** Se exporta `Footer` pero el componente real está en `src/layouts/Footer.tsx`

```tsx
export * from "./Footer/Footer"; // ❌ Esta carpeta no existe
```

**Solución:** Eliminar esta línea del barrel export o mover Footer a `src/components/`

### 3. ✅ SOLUCIONADO - Typo en MIME type del favicon

**Archivo:** `index.html:5`
**Estado:** RESUELTO - Ya está corregido a `image/svg+xml`

### 4. ❌ PENDIENTE - Gestores de Paquetes Duplicados

**Ubicación:** Raíz del proyecto  
**Problema:** Pueden existir ambos archivos `bun.lock` y `package-lock.json`  
**Solución:** Eliminar `package-lock.json` si se usa Bun

### 5. ❌ PENDIENTE - Hydration Mismatch en Tema

**Ubicación:** `src/stores/themeStore.ts:47-52`  
**Problema:**

```typescript
if (typeof document !== "undefined") {
  document.documentElement.setAttribute(
    "data-theme",
    useThemeStore.getState().theme,
  );
}
```

**Impacto:** Flash de tema incorrecto durante la carga/hydration  
**Solución:** Mover la lógica a un `useEffect` para evitar ejecución durante SSR

### 6. ❌ PENDIENTE - Event Listeners sin Optimización

**Ubicación:**

- `src/hooks/useScrollTopVisible.ts`
- `src/hooks/useIntersection.ts`

**Problema:** Los listeners de scroll se ejecutan en cada frame sin throttle/debounce  
**Impacto:** Jank en la UI, especialmente en dispositivos de bajo rendimiento  
**Solución:** Implementar throttle de 100ms o usar `requestAnimationFrame`

## 🟠 PROBLEMAS MEDIOS Y ANTI-PATRONES

### 7. ✅ SOLUCIONADO - Typo "heigth" en props

**Archivo:** `src/components/ThemeImg/ThemeImg.tsx:6`
**Estado:** RESUELTO - Ya está corregido a `height`

### 8. ✅ SOLUCIONADO - Typo "lenguage" en datos

**Archivo:** `src/data/stackData.ts:2`
**Estado:** RESUELTO - Ya está corregido a `language`

### 9. ✅ SOLUCIONADO - Código duplicado en ThemeImg

**Archivo:** `src/components/ThemeImg/ThemeImg.tsx`
**Estado:** RESUELTO - Ya usa un solo elemento `<img>` con operador ternario para el src

### 10. ✅ SOLUCIONADO - Código duplicado en HamburgerButton

**Archivo:** `src/components/HamburgerButton/HamburgerButton.tsx`
**Estado:** RESUELTO - Simplificado con operador ternario más limpio

### 11. ✅ SOLUCIONADO - Layout Footer es un wrapper innecesario

**Archivo:** `src/layouts/Footer.tsx`
**Estado:** RESUELTO - Ahora es un componente real con contenido propio

### 12. ✅ SOLUCIONADO - InViewAnimation con estado inicial incorrecto

**Archivo:** `src/components/InViewAnimation/InViewAnimation.tsx:38`
**Estado:** RESUELTO - Ya usa `initial="hidden"`

### 13. ✅ PENDIENTE - Espacios extra en datos de proyectos

**Archivo:** `src/data/projectsData.ts`

```tsx
stack: ["React", "TypeScript", "Tailwind CSS", " Vite", "Zustand"],
```

**Problema:** Items con espacios al inicio: `" Vite"`, `" Zustand"`, `" OpenWeather API"`
**Solución:** Eliminar los espacios al inicio

### 14. ✅ PARCIALMENTE SOLUCIONADO - Propiedades no utilizadas en TechCard

**Archivo:** `src/components/TechCard/TechCard.tsx`
**Estado:** PARCIAL - Se eliminaron `description` y `url` del interface, pero los datos aún las contienen en `stackData.ts`

### 15. ✅ PENDIENTE - role="button" innecesario en anchor

**Archivo:** `src/components/BackToTopButton/BackToTopButton.tsx:17`
**Problema:** Un `<a>` con `href` ya es interactivo, no necesita `role="button"`
**Solución:** Verificar si ButtonLink agrega este role y eliminarlo

### 16. ✅ PENDIENTE - Typo "sectionsIs"

**Archivo:** `src/hooks/useIntersection.ts:3`
**Problema:** El parámetro se llama `sectionsIs` en lugar de `sectionIds`
**Solución:** Renombrar a `sectionIds`

### 17. ✅ PENDIENTE - Typo en className duplicado

**Archivo:** `src/components/TechCard/TechCard.tsx:30`
**Estado:** RESUELTO - Ya usa `"w-6 h-6"` correctamente

### 18. ❌ PENDIENTE - Callbacks Inline sin Optimización

**Ubicación:** `PortfolioApp.tsx:21-23`  
**Problema:**

```typescript
const handleMenu = () => {
  setOpenMenu(!openMenu);
};
```

**Impacto:** Nueva función en cada render  
**Solución:** Usar `useCallback` o definir fuera del componente

### 19. ✅ SOLUCIONADO - Fragmentos Innecesarios

**Archivo:** `src/components/ThemeImg/ThemeImg.tsx`
**Estado:** RESUELTO - Ya no usa fragmentos innecesarios

**Archivo:** `src/components/TechCard/TechCard.tsx`
**Estado:** RESUELTO - Ya no usa fragmentos innecesarios

### 20. ❌ PENDIENTE - Uso de Datos no Únicos como Keys

**Ubicación:** `src/layouts/Main.tsx:78`  
**Problema:** `key={p.title}` - los títulos pueden no ser únicos  
**Solución:** Agregar un campo `id` único a los proyectos

### 21. ❌ PENDIENTE - CSS Duplicado en Condicionales de Tema

**Ubicación:** Múltiples componentes  
**Patrón problemático:**

```typescript
theme === "dark" ? "clases-dark" : "clases-light";
```

**Repetido en:**

- `ThemeButton.tsx`
- `NavMenuDesktop.tsx`
- `NavMenuMobile.tsx`
- `ProjectCard.tsx`

**Solución:** Crear hook `useThemeClasses()` o usar CSS variables

### 22. ✅ PENDIENTE - Estructura de Carpetas Inconsistente

**Problema:**

- `Helpers/` - mayúscula (si existe)
- `types/` - minúscula

**Convención:** Usar **kebab-case** para todas las carpetas

### 23. ❌ PENDIENTE - Falta de Error Boundaries

**Impacto:** Errores de renderizado no capturados pueden romper toda la app  
**Solución:** Implementar componente `ErrorBoundary`

## 🟡 MEJORAS RECOMENDADAS

### 24. ✅ SOLUCIONADO - Falta tipado explícito para navigation

**Archivo:** `src/data/navigation.ts`
**Estado:** RESUELTO - Ya tiene interface `NavItem` y tipado correcto

### 25. ✅ SOLUCIONADO - Inconsistencia en orden de sectionIds

**Archivo:** `src/data/navigation.ts`
**Estado:** RESUELTO - Ahora ambos arrays están sincronizados con el orden: home → skills → projects → about

### 26. ✅ PARCIALMENTE SOLUCIONADO - Barrel index.ts incompleto

**Archivo:** `src/components/index.ts`
**Estado:** PARCIAL - `ProjectCard` y `SvgZod` ya están exportados, pero falta eliminar el export de Footer inexistente

### 27. ✅ PENDIENTE - Código muerto / sin usar

**Archivos afectados:**

- `src/hooks/useGetTechnologies.ts`
- `src/services/fetchTechService.ts`
- `src/data/technologies.json`
- `src/types/technologies.ts`
- `src/components/SvgZod/SvgZod.tsx` (posiblemente)

**Problema:** Estos archivos no se usan en ningún lugar del proyecto
**Solución:** Eliminar los archivos no utilizados o implementar su uso

### 28. ✅ PENDIENTE - CSS con valores conflictivos

**Archivo:** `src/components/ProjectCard/ProjectCard.module.css:9-14`

```css
border-style: solid;
border-color: rgb(92, 92, 92);
border-width: 0.2rem;
border-top: 10px;
border-right: 10px;
border-left: 10px;
```

**Problema:** `border-top: 10px` sobrescribe solo el ancho, no el estilo ni color
**Solución:** Usar `border-top-width`, `border-right-width`, `border-left-width`

### 29. ❌ PENDIENTE - Loading/error states no implementados

**Archivo:** `src/components/TechnologiesSection/TechnologiesSection.tsx`
**Problema:** El fetch de tecnologías está comentado. Si se descomenta, no hay UI para estados de carga o error
**Solución:** Implementar estados de loading y error, o eliminar el código comentado

## 🧪 Comandos Disponibles

```bash
# Desarrollo
bun run dev

# Build
bun run build

# Linting
bun run lint

# Preview
bun run preview
```

## 📊 RESUMEN DE ESTADO

| Categoría        | Total  | ✅ Solucionados | ❌ Pendientes |
| ---------------- | ------ | --------------- | ------------- |
| 🔴 Críticos      | 6      | 2               | 4             |
| 🟠 Anti-patrones | 17     | 10              | 7             |
| 🟡 Mejoras       | 6      | 2               | 4             |
| **TOTAL**        | **29** | **14**          | **15**        |

## 🎯 Tareas Prioritarias Pendientes (Orden de Importancia)

1. [ ] **CRÍTICO** - Eliminar export de Footer inexistente en barrel
2. [ ] **CRÍTICO** - Arreglar flash de tema (hydration mismatch)
3. [ ] **CRÍTICO** - Optimizar scroll listeners con throttle
4. [ ] **CRÍTICO** - Eliminar archivo de lock duplicado (package-lock.json si usa Bun)
5. [ ] **MEDIO** - Corregir espacios en projectsData.ts
6. [ ] **MEDIO** - Renombrar parámetro sectionsIs → sectionIds
7. [ ] **MEDIO** - Agregar IDs únicos a proyectos para usar como keys
8. [ ] **MEDIO** - Optimizar callbacks inline con useCallback
9. [ ] **BAJO** - Eliminar código muerto/archivos no usados
10. [ ] **BAJO** - Arreglar CSS conflictivo en ProjectCard
11. [ ] **BAJO** - Implementar ErrorBoundary
12. [ ] **BAJO** - Crear hook useThemeClasses para evitar duplicación

## 🔍 Notas para Agentes Futuros

- Siempre ejecutar `bun run lint` después de hacer cambios
- Verificar que no haya hydration issues al trabajar con el tema
- Los datos de tecnologías ahora son estáticos (en `stackData.ts`), no se fetchean
- El proyecto usa Motion (Framer Motion) para animaciones
- Tailwind CSS 4 tiene sintaxis diferente a versiones anteriores
- Muchos problemas de la lista original ya han sido resueltos

## 📚 Recursos Útiles

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Motion (Framer Motion) Docs](https://motion.dev/)
- [Zustand Docs](https://docs.pmnd.rs/zustand)
- [React 19 Beta Docs](https://react.dev/blog/2024/04/25/react-19)
