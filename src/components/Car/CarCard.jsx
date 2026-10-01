import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import {FaCog  } from "react-icons/fa";
import { motion } from "framer-motion";
const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-black/40 p-3 text-white hover:bg-red-500">
          <FaHeart />
        </button>

        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 font-semibold text-black">
          <FaStar />
          {car.rating}
        </div>

        <div className="absolute bottom-4 left-4 rounded-full bg-blue-600 px-5 py-2 font-bold text-white">
          £{car.price.toLocaleString()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">{car.name}</h2>

        <p className="mt-1 text-slate-400">{car.brand}</p>

        <div className="mt-5 flex justify-between text-slate-300">
          <span>{car.year}</span>

          <span className="flex items-center gap-2">
            <FaGasPump />
            {car.fuel}
          </span>

          <span className="flex items-center gap-2">
            <FaCog />
            {car.transmission}
          </span>
        </div>

        <button
          onClick={() => navigate(`/cars/${car.id}`)}
          className="btn mt-6 w-full border-none bg-blue-600 text-white hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default CarCard;