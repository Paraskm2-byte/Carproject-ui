import { motion } from "framer-motion";
import { useRef } from "react";

import bmw from "../assets/videos/bmw.mp4";
import audi from "../assets/videos/audi.mp4";
import tesla from "../assets/videos/tesla.mp4";
import mercedes from "../assets/videos/mercedes.mp4";
import toyota from "../assets/videos/toyota.mp4";
import honda from "../assets/videos/honda.mp4";

const brands = [
  { name: "BMW", video: bmw, cars: "120+ Cars" },
  { name: "Audi", video: audi, cars: "95+ Cars" },
  { name: "Tesla", video: tesla, cars: "80+ Cars" },
  { name: "Mercedes", video: mercedes, cars: "110+ Cars" },
  { name: "Toyota", video: toyota, cars: "140+ Cars" },
  { name: "Honda", video: honda, cars: "105+ Cars" },
];

const BrandCard = ({ brand }) => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; // Restart from beginning
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      className="rounded-2xl bg-slate-900 p-4 shadow-lg"
    >
      <div className="overflow-hidden rounded-2xl">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-56 w-full object-cover"
        >
          <source src={brand.video} type="video/mp4" />
        </video>
      </div>

      <h3 className="mt-6 text-center text-3xl font-bold text-white">
        {brand.name}
      </h3>

      <p className="mt-2 text-center text-slate-400">
        {brand.cars}
      </p>

      <button className="btn mt-8 w-full rounded-full bg-blue-600 border-none hover:bg-blue-700">
        Explore Cars
      </button>
    </motion.div>
  );
};

const Brands = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {brands.map((brand) => (
        <BrandCard key={brand.name} brand={brand} />
      ))}
    </div>
  );
};

export default Brands;