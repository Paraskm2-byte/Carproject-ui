import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaTools,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "./Navbar";
import Footer from "./Footer";

const services = [
  {
    title: "Book Test Drive",
    icon: <FaCarSide />,
    desc: "Experience your dream car before making the decision.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Car Finance",
    icon: <FaMoneyCheckAlt />,
    desc: "Flexible EMI and finance options with trusted partners.",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Insurance",
    icon: <FaShieldAlt />,
    desc: "Comprehensive insurance plans for complete peace of mind.",
    color: "from-red-600 to-orange-500",
  },
  {
    title: "Car Exchange",
    icon: <FaExchangeAlt />,
    desc: "Upgrade your vehicle with the best exchange value.",
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Maintenance",
    icon: <FaTools />,
    desc: "Professional servicing using genuine spare parts.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "24/7 Support",
    icon: <FaHeadset />,
    desc: "Dedicated customer support whenever you need assistance.",
    color: "from-indigo-600 to-blue-500",
  },
];

const process = [
  "Choose Your Service",
  "Schedule Appointment",
  "Enjoy Premium Experience",
];

const ServicesPage = () => {
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
              Premium
              <span className="text-blue-500"> Car Services</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              Everything you need—from buying your dream car to financing,
              insurance, maintenance, and after-sales support.
            </p>

          </motion.div>

        </section>

        {/* Services */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
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
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl text-white`}
                >
                  {service.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-7">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* Process */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-center text-3xl font-bold text-white mb-12">
            Simple Process
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {process.map((step, index) => (

              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step}
                </h3>

              </motion.div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Ready to Experience CarPoint?
            </h2>

            <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
              Book your dream car today and enjoy premium automotive
              services with trusted experts.
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

export default ServicesPage;