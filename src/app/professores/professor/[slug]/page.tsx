import { UserProps } from "@/components/ui/User";
import { sanityFetch } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
// import { title } from "process";
// import React from "react";

async function getUser(slug: string): Promise<SanityDocument> {
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

  return data;
}

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
import portableTextConfig from "@/utils/portableTextConfig";
import { Github, Instagram, Linkedin } from "lucide-react";
import { link } from "fs";

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getUser(params.slug);

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto border-none">
        <CardContent className="">
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
              <CardHeader className="">
                <CardTitle className="text-4xl sm:text-5xl font-bold">
                  {data.name}
                </CardTitle>
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
                  <div className="border rounded-md p-4">
                    <PortableText
                      value={data.bio}
                      components={portableTextConfig}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Redes Sociais</Label>
                  <div className="flex flex-wrap gap-2">
                    {data.socialLinks.map((item: any, index: number) => {
                      switch (item.platform) {
                        case "github":
                          return (
                            <a href={item.url} key={index} target="_blank">
                              <Github className="w-8 h-8" />
                            </a>
                          );
                        case "linkedin":
                          return (
                            <a href={item.url} key={index} target="_blank">
                              <Linkedin className="w-8 h-8" />
                            </a>
                          );
                        case "instagram":
                          return (
                            <a href={item.url} key={index} target="_blank">
                              <Instagram className="w-8 h-8" />
                            </a>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
