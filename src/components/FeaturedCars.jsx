import { motion } from "framer-motion";
import {
  FaStar,
  FaHeart,
  FaArrowRight,
  FaGasPump,
  FaCog,
  FaRoad,
} from "react-icons/fa";

const cars = [
  {
    id: 1,
    name: "BMW M4 Competition",
    price: "₹95 Lakh",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "12 km/l",
  },
  {
    id: 2,
    name: "Audi RS7",
    price: "₹1.15 Cr",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "11 km/l",
  },
  {
    id: 3,
    name: "Mercedes AMG GT",
    price: "₹2.10 Cr",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "10 km/l",
  },
];

const FeaturedCars = () => {
  return (
    <section className="relative bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-blue-500 font-semibold tracking-widest uppercase">
            Premium Collection
          </span>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Featured Cars
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Discover hand-picked luxury vehicles from the world's most
            prestigious automotive brands.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10"></div>

              {/* Favorite */}

              <button className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 backdrop-blur-md transition hover:bg-red-500">
                <FaHeart className="text-white" />
              </button>

              {/* Rating */}

              <div className="absolute left-5 top-5 z-20 flex items-center gap-1 rounded-full bg-black/60 px-3 py-2 backdrop-blur-md">
                <FaStar className="text-yellow-400" />
                <span className="text-white">{car.rating}</span>
              </div>

              {/* Image */}

              <div className="overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                  src={car.image}
                  alt={car.name}
                  className="h-72 w-full object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {car.name}
                </h3>

                <div className="mt-6 flex justify-between text-slate-300">

                  <div className="flex items-center gap-2">
                    <FaGasPump className="text-blue-500" />
                    {car.fuel}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCog className="text-blue-500" />
                    {car.transmission}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRoad className="text-blue-500" />
                    {car.mileage}
                  </div>

                </div>

                {/* Price */}

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      Starting From
                    </p>

                    <h2 className="text-3xl font-bold text-blue-400">
                      {car.price}
                    </h2>

                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn rounded-full border-none bg-blue-600 px-6 hover:bg-blue-700"
                  >
                    View

                    <FaArrowRight />
                  </motion.button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedCars;