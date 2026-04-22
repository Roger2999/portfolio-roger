import { Suspense } from "react";
import { Main } from "./layouts/Main";
import { domAnimation, LazyMotion } from "motion/react";
import { RootLayout } from "./RootLayout";

export const PortfolioApp = () => {
  return (
    <RootLayout>
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={<div>Cargando...</div>}>
          <Main />
        </Suspense>
      </LazyMotion>
    </RootLayout>
  );
};
