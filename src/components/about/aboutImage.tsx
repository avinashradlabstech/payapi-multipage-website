import React from "react";

interface AboutImageData {
  imageName: string;
  imageAlt: string;
  imageUrl: string;
}

const AboutImage: React.FC<AboutImageData> = ({
  imageName,
  imageAlt,
  imageUrl,
}) => {

  return (
    <div className="pt-76 sm:pt-90 w-full flex justify-center items-center">
      <img
        className="object-contain"
        src={`${imageUrl}/mobile/${imageName}`}
        srcSet={`
          ${imageUrl}/mobile/${imageName} 449w, 
          ${imageUrl}/tablet/${imageName} 769w, 
          ${imageUrl}/desktop/${imageName} 1440w
          ${imageUrl}/desktop/${imageName} 1920w
        `}
        sizes={`
          (max-width: 449px) 449px, 
          (max-width: 769px) 769px, 
          (max-width: 1440px) 1440px, 
          (max-width: 1920px) 1920px, 
          100vw
        `}
        alt={imageAlt}
        width="100%"
        height="auto"
        style={{ width: "100%", height: "auto", maxWidth: "1920px" }}
        loading="lazy"
      />
    </div>
  );
};

export default AboutImage;
