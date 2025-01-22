import { BlogBlock } from "@/components/Blog-block";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="">
        <section className="container mx-auto py-12 px-4 md:px-6 lg:py-16">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Blog
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Excelentes profissionais dedicados a oferecer o melhor ensino
                público da região de Santa Cruz da Serra
              </p>
            </div>
          </div>
          <BlogBlock />
        </section>
      </div>
    </div>
  );
};

export default page;
