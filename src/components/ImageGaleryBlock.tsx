/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZNu2CD71Q0K
 **/

import ImageComponent, { ImageProps } from "./ui/ImageComponent";

type ImageGaleryProps = {
  title?: string;
  description?: string;
  images: ImageProps[];
};

export function ImageGalery({ title, description, images }: ImageGaleryProps) {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className=" columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
          {images.map((item, index) => (
            <ImageComponent key={index} image={item.image} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
