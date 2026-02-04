# Guía para Agentes - Portfolio Roger

Este documento contiene las convenciones, problemas conocidos y mejores prácticas para trabajar en este proyecto.

## 🏗️ Arquitectura

- **Framework:** React 19 + TypeScript 5.9
- **Build Tool:** Vite 7
- **Estilos:** Tailwind CSS 4
- **Estado Global:** Zustand
- **Animaciones:** Motion (Framer Motion)
- **Gestor de Paquetes:** Bun (preferido) - Ver nota importante abajo

## ⚠️ Problemas Críticos Conocidos

### 1. Gestores de Paquetes Duplicados
**Estado:** CRÍTICO  
**Ubicación:** Raíz del proyecto  
**Problema:** Existen ambos archivos `bun.lock` y `package-lock.json`  
**Solución:** Eliminar `package-lock.json` si se usa Bun, o `bun.lock` si se usa npm

### 2. Hydration Mismatch en Tema
**Estado:** CRÍTICO  
**Ubicación:** `src/stores/themeStore.ts:47-52`  
**Problema:**
```typescript
if (typeof document !== "undefined") {
  document.documentElement.setAttribute("data-theme", useThemeStore.getState().theme);
}
```
**Impacto:** Flash de tema incorrecto durante la carga/hydration  
**Solución:** Mover la lógica a un `useEffect` para evitar ejecución durante SSR

### 3. Event Listeners sin Optimización
**Estado:** CRÍTICO - Performance  
**Ubicación:** 
- `src/hooks/useScrollTopVisible.ts`
- `src/hooks/useIntersection.ts`

**Problema:** Los listeners de scroll se ejecutan en cada frame sin throttle/debounce  
**Impacto:** Jank en la UI, especialmente en dispositivos de bajo rendimiento  
**Solución:** Implementar throttle de 100ms o usar `requestAnimationFrame`

## 🟡 Problemas Medios

### 4. Typos y Errores Menores

| Archivo | Línea | Error | Corrección |
|---------|-------|-------|------------|
| `index.html` | 5 | `image/svgp+xml` | `image/svg+xml` |
| `useIntersection.ts` | 3 | `sectionsIs` | `sectionIds` |
| `stackData.ts` | múltiples | `" Vite"`, `" Zustand"` | `"Vite"`, `"Zustand"` |

### 5. Inconsistencia en Imports
**Ubicación:** Múltiples archivos  
**Problema:** Mezcla de barrel exports (`from "./components"`) y rutas completas  
**Convención:** Usar barrel exports consistentemente desde `src/components/index.ts`

### 6. Callbacks Inline sin Optimización
**Ubicación:** `PortfolioApp.tsx:21-23`  
**Problema:**
```typescript
const handleMenu = () => {
  setOpenMenu(!openMenu);
};
```
**Impacto:** Nueva función en cada render  
**Solución:** Usar `useCallback` o definir fuera del componente

### 7. Fragmentos Innecesarios
**Ubicación:** `ThemeImg.tsx:12-20`  
**Problema:** Fragmento `<>...</>` con un solo elemento hijo  
**Solución:** Eliminar el fragmento

### 8. Uso de Datos no Únicos como Keys
**Ubicación:** `Main.tsx:78`  
**Problema:** `key={p.title}` - los títulos pueden no ser únicos  
**Solución:** Agregar un campo `id` único a los proyectos

## 🟢 Optimizaciones Leves

### 9. CSS Duplicado en Condicionales de Tema
**Ubicación:** Múltiples componentes  
**Patrón problemático:**
```typescript
theme === "dark" ? "clases-dark" : "clases-light"
```
**Repetido en:**
- `ThemeButton.tsx`
- `NavMenuDesktop.tsx`
- `NavMenuMobile.tsx`
- `ProjectCard.tsx`

**Solución:** Crear hook `useThemeClasses()` o usar CSS variables

### 10. Estructura de Carpetas Inconsistente
**Problema:**
- `Helpers/` - mayúscula
- `types/` - minúscula

**Convención:** Usar **kebab-case** para todas las carpetas:
- `helpers/`
- `types/`
- `components/`

### 11. Props Redundantes en Interfaces
**Ubicación:** `ButtonLink.tsx:1-2`  
**Problema:**
```typescript
interface ImgProps extends React.ComponentPropsWithRef<"img"> {
  className?: string;  // Ya incluido en ComponentPropsWithRef
}
```

### 12. Falta de Error Boundaries
**Impacto:** Errores de renderizado no capturados pueden romper toda la app  
**Solución:** Implementar componente `ErrorBoundary`

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
- **kebab-case** preferido (aunque actualmente hay mezcla)
- Componentes: dentro de carpetas con su nombre (ej: `ThemeButton/ThemeButton.tsx`)

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

## 🎯 Tareas Prioritarias Pendientes

1. [ ] Arreglar flash de tema (hydration mismatch)
2. [ ] Optimizar scroll listeners con throttle
3. [ ] Eliminar archivo de lock duplicado
4. [ ] Corregir typo `svgp` → `svg` en index.html
5. [ ] Estandarizar imports a barrel exports
6. [ ] Agregar ErrorBoundary
7. [ ] Revisar y corregir typos en stackData.ts

## 🔍 Notas para Agentes Futuros

- Siempre ejecutar `bun run lint` después de hacer cambios
- Verificar que no haya hydration issues al trabajar con el tema
- Los datos de tecnologías ahora son estáticos (en `stackData.ts`), no se fetchean
- El proyecto usa Motion (Framer Motion) para animaciones
- Tailwind CSS 4 tiene sintaxis diferente a versiones anteriores

## 📚 Recursos Útiles

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Motion (Framer Motion) Docs](https://motion.dev/)
- [Zustand Docs](https://docs.pmnd.rs/zustand)
- [React 19 Beta Docs](https://react.dev/blog/2024/04/25/react-19)
