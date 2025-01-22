import Link from "next/link";
import React from "react";
import ArrowRightIcon from "./ArrowRightIcon";
import Image from "next/image";

export type BlogCardProps = {
  title: string;
  description: string;
  link: string;
  buttonText?: string;
  image: string;
};

const BlogCard = ({
  title,
  description,
  link,
  buttonText = "Continue lendo...",
  image,
}: BlogCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      <Link href={`/blog/${link}`} prefetch={false}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-6 bg-background flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Link
          href={`/blog/${link}`}
          prefetch={false}
          aria-label={`Continue reading ${title}`}
          className="inline-flex items-center font-medium text-primary hover:font-semibold mt-4 self-start"
        >
          {buttonText}
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
