import { Suspense } from "react";
import { Main } from "./layouts/Main";
import { domAnimation, LazyMotion } from "motion/react";
import { LayoutRoot } from "./LayoutRoot";

export const PortfolioApp = () => {
  return (
    <LayoutRoot>
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={<div>Cargando...</div>}>
          <Main />
        </Suspense>
      </LazyMotion>
    </LayoutRoot>
  );
};
