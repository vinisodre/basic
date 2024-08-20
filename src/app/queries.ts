import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";


//Informações gerais
const mainInfo = `*[_type == "Basic"]{
  name,
  address
}`;
const main = await sanityFetch<SanityDocument[]>({query: mainInfo});

//Topbar
const topbarQuery = `*[_type == "Topbar"]{
  text
}`;
const topbar = await sanityFetch<SanityDocument[]>({query: topbarQuery});


//ImageText
const imageTextQuery = `*[_type == 'imageText']{
  title,
  "image": image.asset->url,
  alt,
  content,
  hasOneButton,
    linkButtonOne,
    textButtonOne,
    hasTwoButtons,
    linkButtonTwo,
    textButtonTwo,
}`
const imageText = await sanityFetch<SanityDocument[]>({query: imageTextQuery});

//twoColumnsText
const twoColumnsTextQuery = `*[_type == "TwoColumnsText"]{
  title,
  text1,
  text2,
  hasButton
}`;
const twoColumnsText = await sanityFetch<SanityDocument[]>({query: twoColumnsTextQuery});


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


  export { heroContent, areasContent, main, blogPosts, topbar, twoColumnsText, imageText }; 