import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";


//Informações gerais
const mainInfo = `*[_type == "Basic"]{
  name,
  address
}`;
const main = await sanityFetch<SanityDocument[]>({query: mainInfo});


//Areas
const areasQuery = `*[_type == "area"]{
    title,
    description,
    hasButton,
    link,
    buttonText,
    "imageHref": image.asset->url
  }`;
  const areasContent = await sanityFetch<SanityDocument[]>({query: areasQuery});

//Hero
const heroQuery = `*[_type == "Hero"]{
    title,
    subtitle,
    hasButton,
    link,
    linkText,
    "imageHref": image.asset->url
  }`;
  const heroContent = await sanityFetch<SanityDocument[]>({query: heroQuery});

//Blog Posts
const blogQuery = `*[_type == "blogPost"]{
  title,
  description,
  content,
  "link": link.current,
  buttonText,
  "image": image.asset->url
}`
  const blogPosts = await sanityFetch<SanityDocument[]>({query: blogQuery});


  export { heroContent, areasContent, main, blogPosts } 