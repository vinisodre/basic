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
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Link href={`/blog/${link}`} prefetch={false}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-6 bg-background">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          href={`/blog/${link}`}
          prefetch={false}
          className="inline-flex items-center font-medium text-primary hover:font-semibold"
        >
          {buttonText}
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
