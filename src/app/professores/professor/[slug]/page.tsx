// import { UserProps } from "@/components/ui/User";
import { sanityFetch } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
// import { title } from "process";
// import React from "react";

async function getUser(slug: string): Promise<SanityDocument | UserProps> {
  const query = `*[_type == "user" && slug.current == "${slug}"]{
    name,
    subject,
    "slug": slug.current,
    email,
    bio,
    role,
    socialLinks,
    "image": profileImage.asset->url
  }[0]`;

  const data = await sanityFetch<SanityDocument>({ query });

  console.log("console do usuário", data);

  return data || null;
}

// export default async function page({ params }: { params: { slug: string } }) {
//   const data = await getUser(params.slug);
//   return (
//     <div className="container mx-auto px-4 md:px-6">
//       <h1 className="text-4xl text-center my-10">
//         Página do Professor {data.name}
//       </h1>
//       <div className=" flex-col items-center justify-center">
//         <img src={data.image} alt={data.name} />
//         <p>{data.email}</p>
//         <p>{data.role}</p>
//         <p>{data.subject}</p>
//         <PortableText value={data.bio} />
//       </div>
//       <div>
//         <h1 className="text-xl text-center my-10">Redes sociais</h1>
//         <ul>
//           {Object.entries(data.socialLinks).map(([key, value]) => (
//             <li key={key}>
//               <a href={value}>
//                 <p>{key}</p>
//                 <p>{value}</p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

//TODO velificar o link das redes sociais com um case switch

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Iframe from "@/components/ui/iframe";

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getUser(params.slug);

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Image */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <Avatar className="w-48 h-48">
                <AvatarImage src={data.image} alt={data.name} />
                <AvatarFallback>{data.name}</AvatarFallback>
              </Avatar>
            </div>

            {/* Right column - Profile Data */}
            <div className="w-full md:w-2/3">
              <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value="john.doe@example.com" readOnly />
                </div>

                <div className="space-y-2">
                  <Label>Disciplinas</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{data.subject}</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>GraphQL</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background"
                    defaultValue="Passionate software developer with 5 years of experience in web technologies. Always eager to learn and tackle new challenges."
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label>Redes Sociais</Label>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(data.socialLinks).map(([key, value]) => (
                      <a href={value}>
                        <Badge key={key}>{key}</Badge>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </CardContent>
      </Card>
      <Iframe />
    </div>
  );
}
