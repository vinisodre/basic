import React from "react";

export type ImageProps = {
  image: string;
  alt: string;
};

const ImageComponent = ({ image, alt }: ImageProps) => {
  return (
    <div className="mb-4 break-inside-avoid relative w-full h-0 pb-[56.25%]">
      <img src={image} alt={alt} className="w-full object-cover rounded-lg" />
    </div>
  );
};

export default ImageComponent;

// TODO: ALTERAR O COMPONENTE PARA USAR O NEXT IMAGE
