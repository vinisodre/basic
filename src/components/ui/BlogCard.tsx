import Link from "next/link";
import React from "react";
import ArrowRightIcon from "./ArrowRightIcon";

export type BlogCardProps = {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  imageHref: string;
  alt: string;
};

const BlogCard = ({
  title,
  description,
  link,
  buttonText = "Continue lendo...",
  imageHref,
  alt,
}: BlogCardProps) => {
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageHref}
          alt={alt}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 bg-background">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Link
            href={link}
            className="inline-flex items-center font-medium text-primary hover:text-primary-foreground"
            prefetch={false}
          >
            {buttonText}
            <ArrowRightIcon className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
