# Issues y Mejoras del Proyecto Portfolio-Roger

## 🔴 PROBLEMAS CRÍTICOS

### 1. Ruta de imagen incorrecta
**Archivo:** `src/layouts/Main.tsx:85`
```tsx
src={"/public/images/profile-photo.webp"}
```
**Problema:** Vite sirve archivos de `public/` en la raíz. Esta imagen **no se cargará**.
**Solución:** Cambiar a `/images/profile-photo.webp`

---

### 2. Export de componente inexistente en barrel
**Archivo:** `src/components/index.ts:11`
```tsx
export * from "./Footer/Footer";
```
**Problema:** El directorio `src/components/Footer/` **no existe**. Esto causará error de build si se importa desde el barrel.
**Solución:** Eliminar esta línea o crear el componente Footer en la ubicación correcta.

---

### 3. Typo en MIME type del favicon
**Archivo:** `index.html:5`
```html
<link rel="icon" type="image/svgp+xml" href="/portfolio.svg" />
```
**Problema:** `image/svgp+xml` debería ser `image/svg+xml` (sin la "p").
**Solución:** Corregir el typo.

---

## 🟠 ANTI-PATRONES Y MALAS PRÁCTICAS

### 4. Typo "heigth" en props
**Archivo:** `src/components/ThemeImg/ThemeImg.tsx:6`
```tsx
heigth: number;
```
**Solución:** Cambiar a `height`.

---

### 5. Typo "lenguage" en datos
**Archivo:** `src/data/stackData.ts:2`
```tsx
lenguage: [
```
**Solución:** Cambiar a `language`.

---

### 6. Código duplicado en ThemeImg
**Archivo:** `src/components/ThemeImg/ThemeImg.tsx:11-30`
```tsx
return (
  <>
    {theme === "dark" ? (
      <img src={srcDark} width={width} height={heigth} ... />
    ) : (
      <img src={srcLight} width={width} height={heigth} ... />
    )}
  </>
);
```
**Solución:** Simplificar a:
```tsx
return (
  <img
    src={theme === "dark" ? srcDark : srcLight}
    width={width}
    height={height}
    alt="logo de la web"
    className="logo rounded-full ml-10 bg-cover w-12 h-12"
  />
);
```

---

### 7. Código duplicado en HamburgerButton
**Archivo:** `src/components/HamburgerButton/HamburgerButton.tsx:20-39`
```tsx
{!openMenu ? (
  theme === "dark" ? (
    <img src={iconDarkHamburger} ... />
  ) : (
    <img src={iconLightHamburger} ... />
  )
) : (
  <img src={iconClose} ... />
)}
```
**Problema:** Triple ternario innecesario y difícil de leer.
**Solución:** Extraer la lógica del icono a una variable o simplificar la estructura.

---

### 8. Layout Footer es un wrapper innecesario
**Archivo:** `src/layouts/Footer.tsx`
```tsx
import { Footer as FooterComponent } from "../components";

export const Footer = () => {
  return <FooterComponent />;
};
```
**Problema:** Solo re-exporta sin agregar valor. Además, importa desde un barrel que tiene un export roto.
**Solución:** Importar directamente el componente real o eliminar este wrapper.

---

### 9. InViewAnimation con estado inicial incorrecto
**Archivo:** `src/components/InViewAnimation/InViewAnimation.tsx:38`
```tsx
initial="visible"
animate={isInView ? "visible" : "hidden"}
```
**Problema:** Si empieza en `"visible"`, no hay animación de entrada visible.
**Solución:** Cambiar a `initial="hidden"` para que la animación de entrada sea perceptible.

---

### 10. Espacios extra en datos de proyectos
**Archivo:** `src/data/projectsData.ts`
```tsx
stack: ["React", "TypeScript", "Tailwind CSS", " Vite", "Zustand"],
```
**Problema:** Items con espacios al inicio: `" Vite"`, `" Zustand"`, `" Supabase"`, `" OpenWeather API"`.
**Solución:** Eliminar los espacios al inicio de cada string.

---

### 11. Propiedades no utilizadas en TechCard
**Archivo:** `src/components/TechCard/TechCard.tsx:5-10`
```tsx
interface Tech {
  name: string;
  icon: string;
  description: string;  // ❌ Nunca se usa
  url: string;          // ❌ Nunca se usa
}
```
**Problema:** Los `ButtonLink` no usan `href={tech.url}` ni muestran `description`.
**Solución:** Usar las propiedades o eliminarlas del interface si no son necesarias.

---

### 12. role="button" innecesario en anchor
**Archivo:** `src/components/BackToTopButton/BackToTopButton.tsx:17`
```tsx
<ButtonLink
  role="button"
  icon={...}
  href="#"
```
**Problema:** Un `<a>` con `href` ya es interactivo, no necesita `role="button"`.
**Solución:** Eliminar el atributo `role`.

---

### 13. Código muerto / sin usar
**Archivos afectados:**
- `src/hooks/useGetTechnologies.ts`
- `src/services/fetchTechService.ts`
- `src/data/technologies.json`
- `src/types/technologies.ts`
- `src/components/SvgZod/SvgZod.tsx`

**Problema:** Estos archivos no se usan en ningún lugar del proyecto (el hook está comentado en `TechnologiesSection.tsx`).
**Solución:** Eliminar los archivos no utilizados o implementar su uso.

---

### 14. CSS con valores conflictivos
**Archivo:** `src/components/ProjectCard/ProjectCard.module.css:9-14`
```css
border-style: solid;
border-color: rgb(92, 92, 92);
border-width: 0.2rem;
border-top: 10px;
border-right: 10px;
border-left: 10px;
```
**Problema:** `border-top: 10px` sobrescribe solo el ancho, no el estilo ni color. Probablemente se esperaba `border-top-width: 10px`.
**Solución:** Usar `border-top-width`, `border-right-width`, `border-left-width`.

---

### 15. Typo en className duplicado
**Archivo:** `src/components/TechCard/TechCard.tsx:33`
```tsx
imgProps={{ className: "w-6 w-6" }}
```
**Problema:** `"w-6 w-6"` está duplicado, debería ser `"w-6 h-6"`.
**Solución:** Corregir a `"w-6 h-6"`.

---

## 🟡 MEJORAS RECOMENDADAS

### 16. Falta tipado explícito para navigation
**Archivo:** `src/data/navigation.ts`
```tsx
export const navigation = [
  { id: "1", name: "Home", routes: "home" },
  ...
];
```
**Solución:** Crear un interface y tipar el array:
```tsx
interface NavItem {
  id: string;
  name: string;
  routes: string;
}

export const navigation: NavItem[] = [
  { id: "1", name: "Home", routes: "home" },
  ...
];
```

---

### 17. Inconsistencia en orden de sectionIds
**Archivo:** `src/data/navigation.ts:7`
```tsx
export const sectionIds = ["home", "projects", "skills", "about"];
```
**Problema:** El array `navigation` tiene orden: Home → Skills → Projects → About, pero `sectionIds` tiene: home → projects → skills → about.
**Solución:** Sincronizar el orden o derivar `sectionIds` de `navigation`.

---

### 18. Barrel index.ts incompleto
**Archivo:** `src/components/index.ts`
**Problema:** Faltan exports de algunos componentes:
- `ProjectCard`
- `SvgZod`

**Solución:** Agregar los exports faltantes o eliminar componentes no usados.

---

### 19. Fragmento innecesario en TechCard
**Archivo:** `src/components/TechCard/TechCard.tsx:17`
```tsx
return (
  <>
    <InViewAnimation>
      ...
    </InViewAnimation>
  </>
);
```
**Problema:** El fragmento `<>...</>` no es necesario cuando solo hay un elemento hijo.
**Solución:** Retornar directamente el `<InViewAnimation>`.

---

### 20. Loading/error states no implementados
**Archivo:** `src/components/TechnologiesSection/TechnologiesSection.tsx`
**Problema:** El fetch de tecnologías está comentado. Si se descomenta, no hay UI para estados de carga o error.
**Solución:** Implementar estados de loading y error, o eliminar el código comentado si no se va a usar.

---

## 📊 RESUMEN

| Categoría | Cantidad |
|-----------|----------|
| 🔴 Críticos (rompen funcionalidad) | 3 |
| 🟠 Anti-patrones/Malas prácticas | 12 |
| 🟡 Mejoras recomendadas | 5 |
| **Total** | **20** |
