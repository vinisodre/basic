import React from "react";

export type GaleryProps = {
    image: string;
    alt: string;
};

const Galery = ({ image, alt }: GaleryProps) => {
  return (
    <>
      <div className="mb-4 break-inside-avoid">
        <img
          src={image}
          alt={alt}
          className="w-full object-cover rounded-lg"
        />
      </div>
    </>
  );
};

export default Galery;
