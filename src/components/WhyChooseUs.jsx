import { motion } from "framer-motion";
import {
  FaCarSide,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide />,
    title: "Premium Collection",
    desc: "Choose from luxury, sports, SUV and electric vehicles from top brands.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Certified Cars",
    desc: "Every vehicle is inspected and certified before reaching customers.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Easy Financing",
    desc: "Flexible EMI plans with the lowest interest rates available.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our team is available anytime to help with your purchase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Background Glow */}

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-blue-500 uppercase tracking-widest font-semibold">

            Why Choose Us

          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">

            Experience Premium Car Buying

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">

            We combine luxury vehicles, trusted dealers and exceptional
            customer service to provide the ultimate buying experience.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                delay: index * .15,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -12,
                scale: 1.05,
              }}

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10"></div>

              <div className="relative z-10">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-4xl text-white shadow-xl">

                  {item.icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-400">

                  {item.desc}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;