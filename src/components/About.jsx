import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaUsers,
  FaAward,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "./Navbar";
import Footer from "./Footer";

const stats = [
  {
    number: "500+",
    title: "Cars Sold",
    icon: <FaCarSide />,
  },
  {
    number: "25+",
    title: "Premium Brands",
    icon: <FaAward />,
  },
  {
    number: "1000+",
    title: "Happy Customers",
    icon: <FaUsers />,
  },
];

const values = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "We partner with trusted automobile brands to deliver the highest quality vehicles.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Service",
    desc: "Transparent pricing and professional customer support from start to finish.",
  },
  {
    icon: <FaUsers />,
    title: "Customer First",
    desc: "Every decision is focused on providing an exceptional buying experience.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 pt-24">

        {/* Hero */}

        <section className="max-w-7xl mx-auto px-6 py-16 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              About
              <span className="text-blue-500"> CarPoint</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              CarPoint is a modern automobile platform helping customers
              discover, compare and book premium cars from leading brands
              with complete transparency.
            </p>

          </motion.div>

        </section>

        {/* Story */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <h2 className="text-3xl font-bold text-white">
              Our Story
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Founded with a passion for automobiles, CarPoint brings
              together luxury, performance, and innovation on one platform.
              We aim to simplify the car buying journey with verified
              listings, transparent pricing, and premium customer service.
            </p>

          </div>

        </section>

        {/* Stats */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid gap-8 md:grid-cols-3">

            {stats.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* Values */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {values.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Ready to Find Your Dream Car?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-blue-100">
              Browse hundreds of premium vehicles and book your test
              drive today with CarPoint.
            </p>

            <Link
              to="/cars"
              className="btn mt-8 rounded-full border-none bg-white px-8 text-blue-700 hover:bg-slate-100"
            >
              Explore Cars
              <FaArrowRight />
            </Link>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default AboutPage;