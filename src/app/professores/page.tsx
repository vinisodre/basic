import { getUsers } from "@/sanity/sanityQueries";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import UsersGalery from "@/components/UsersGalery";

async function getAllUsers() {
  const query = getUsers();
  const data = await sanityFetch<SanityDocument>({ query });

  console.log("console da página", data);
  return data || null; // Retorna null se não houver dados
}

export default async function professores() {
  const data = await getAllUsers();
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="">
        <section className="container mx-auto py-12 px-4 md:px-6 lg:py-16">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nossos Professores
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Excelentes profissionais dedicados a oferecer o melhor ensino
                público da região de Santa Cruz da Serra
              </p>
            </div>
          </div>

          <UsersGalery allUsers={data} />
        </section>
      </div>
    </div>
  );
}
