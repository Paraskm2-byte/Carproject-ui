import { motion } from "framer-motion";
import {
  FaCarSide,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footeradmin = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-blue-600 p-3">

                <FaCarSide className="text-2xl text-white" />

              </div>

              <h2 className="text-3xl font-bold text-white">

                Car<span className="text-blue-500">Point</span>

              </h2>

            </div>

            <p className="mt-6 leading-8 text-slate-400">

              CarPoint is your trusted destination for luxury,
              sports, SUV, and electric cars from the world's
              leading automobile brands.

            </p>

            <div className="mt-8 flex gap-4">

              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  className="cursor-pointer rounded-full bg-white/5 p-4 text-white backdrop-blur-xl hover:bg-blue-600"
                >

                  <Icon />

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
          >

            <h3 className="text-2xl font-bold text-white">

              Quick Links

            </h3>

            <ul className="mt-8 space-y-4 text-slate-400">

              {[
                "Home",
                "Cars",
                "Brands",
                "Services",
                "About",
                "Contact",
              ].map((item) => (

                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-500"
                >
                  {item}
                </li>

              ))}

            </ul>

          </motion.div>

          {/* Brands */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >

            <h3 className="text-2xl font-bold text-white">

              Top Brands

            </h3>

            <ul className="mt-8 space-y-4 text-slate-400">

              {[
                "BMW",
                "Audi",
                "Mercedes",
                "Tesla",
                "Toyota",
                "Honda",
              ].map((item) => (

                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-500"
                >
                  {item}
                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
          >

            <h3 className="text-2xl font-bold text-white">

              Contact Us

            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4 text-slate-400">

                <FaMapMarkerAlt className="text-blue-500" />

                Chandigarh, India

              </div>

              <div className="flex items-center gap-4 text-slate-400">

                <FaPhoneAlt className="text-blue-500" />

                +91 98765 43210

              </div>

              <div className="flex items-center gap-4 text-slate-400">

                <FaEnvelope className="text-blue-500" />

                support@carpoint.com

              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="mb-4 text-lg font-semibold text-white">

                Subscribe

              </h4>

              <div className="flex overflow-hidden rounded-full border border-slate-700 bg-slate-900">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent px-5 outline-none text-white"
                />

                <button className="bg-blue-600 px-6 hover:bg-blue-700">

                  <FaArrowRight className="text-white" />

                </button>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-slate-400 md:flex-row">

            <p>

              © 2026 CarPoint. All Rights Reserved.

            </p>

            <div className="flex gap-8">

              <p className="cursor-pointer hover:text-blue-500">

                Privacy Policy

              </p>

              <p className="cursor-pointer hover:text-blue-500">

                Terms & Conditions

              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footeradmin;