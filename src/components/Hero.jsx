import React, { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets"; // Dummy images or placeholders

const bannerImages = [
  assets.hero_img,                // Add more dummy or real images
  "https://static3.depositphotos.com/1000193/104/i/450/depositphotos_1048150-stock-photo-grunge-banner.jpg",
  "https://cdn.pixabay.com/photo/2015/08/23/09/22/banner-902589_640.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // Slide every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`banner-${index}`}
            className="w-full flex-shrink-0 object-cover h-[300px]" // adjust height as needed
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;