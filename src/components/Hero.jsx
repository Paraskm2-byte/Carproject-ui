import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaCar,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import heroCar from "../assets/hero-car.png";
import FeaturedCars from "./FeaturedCars";
import Brands from "./Brands";
import WhyChooseUs from "./WhyChooseUs";

const Hero = () => {
  return (
    <>
    <section className="relative h-170vh overflow-hidden bg-slate-950">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>

      {/* Glow Effects */}

      <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-20 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[130px]" />

      {/* ================= Hero ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <span className="badge badge-primary badge-lg rounded-full px-5 py-4">

              Premium Car Marketplace

            </span>

            <h1 className="mt-8 text-6xl lg:text-8xl font-extrabold leading-tight text-white">

              Find Your

              <span className="block text-blue-500">

                Dream Car

              </span>

              Today

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Discover premium luxury, sports, SUV and electric vehicles
              from the world's top brands with the best prices and easy
              financing.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="btn rounded-full border-none bg-blue-600 px-8 hover:bg-blue-700"
              >
                Explore Cars

                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="btn btn-outline rounded-full text-white"
              >
                <FaPlay />

                Watch Video

              </motion.button>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >

            <img
              src={heroCar}
              alt="Luxury Car"
              className="drop-shadow-[0_20px_60px_rgba(59,130,246,0.5)]"
            />

          </motion.div>

        </div>
                {/* ================= Statistics ================= */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          {[
            {
              icon: <FaCar />,
              value: "1500+",
              title: "Luxury Cars",
            },
            {
              icon: <FaUsers />,
              value: "50K+",
              title: "Happy Customers",
            },
            {
              icon: <FaAward />,
              value: "120+",
              title: "Premium Brands",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="text-5xl text-blue-500">

                {item.icon}

              </div>

              <h1 className="mt-6 text-5xl font-bold text-white">

                {item.value}

              </h1>

              <p className="mt-3 text-slate-400">

                {item.title}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
    

    </>
  );
};

export default Hero;