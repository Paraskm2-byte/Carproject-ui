import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaBolt,
  FaCrown,
  FaSearch,
} from "react-icons/fa";

import Navbar from "./Navbar";
import Footer from "./Footer";


const brands = [
  {
    name: "BMW",
    type: "Luxury Performance",
    icon: <FaCrown />,
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "Audi",
    type: "Premium Sedan",
    icon: <FaCarSide />,
    color: "from-slate-600 to-slate-400",
  },
  {
    name: "Mercedes",
    type: "Luxury Class",
    icon: <FaCrown />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Tesla",
    type: "Electric",
    icon: <FaBolt />,
    color: "from-green-500 to-cyan-500",
  },
  {
    name: "Toyota",
    type: "Reliable",
    icon: <FaCarSide />,
    color: "from-red-500 to-red-700",
  },
  {
    name: "Honda",
    type: "Popular",
    icon: <FaCarSide />,
    color: "from-indigo-500 to-blue-600",
  },
];

const BrandsPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 pt-24">

        {/* Hero */}

        <section className="max-w-7xl mx-auto px-6 py-16">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Explore Premium
              <span className="text-blue-500"> Car Brands</span>
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">
              Browse luxury, sports, electric and family cars from the
              world's most trusted automobile manufacturers.
            </p>

          </motion.div>

          {/* Search */}

          <div className="mt-10 max-w-xl mx-auto">

            <label className="input input-bordered flex items-center gap-3 rounded-full bg-slate-900 border-slate-700">

              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search Brand..."
                className="grow bg-transparent text-white"
              />

            </label>

          </div>

        </section>

        {/* Brands */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {brands.map((brand, index) => (

              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition-all"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${brand.color} flex items-center justify-center text-white text-3xl`}
                >
                  {brand.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                  {brand.name}
                </h2>

                <p className="mt-2 text-gray-400">
                  {brand.type}
                </p>

                <Link
                  to="/cars"
                  className="btn mt-8 w-full rounded-full bg-blue-600 hover:bg-blue-700 border-none text-white"
                >
                  View Cars
                </Link>

              </motion.div>

            ))}

          </div>

        </section>

        {/* Featured */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 p-10 md:p-16">

            <div className="max-w-2xl">

              <span className="badge badge-neutral">
                Featured Brand
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white">
                BMW Collection
              </h2>

              <p className="mt-5 text-blue-100">
                Discover premium BMW sedans, SUVs and performance
                vehicles with advanced technology, luxury interiors
                and thrilling driving experience.
              </p>

              <Link
                to="/cars"
                className="btn mt-8 rounded-full bg-white text-blue-700 hover:bg-slate-100 border-none"
              >
                Explore BMW Cars
              </Link>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default BrandsPage;