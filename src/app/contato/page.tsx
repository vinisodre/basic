import { Hero } from "@/components/Hero";

import { TwoColumnsText } from "@/components/TwoColumnsText";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contato
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Se precisar falar com a gente, escolha a melhor forma
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
