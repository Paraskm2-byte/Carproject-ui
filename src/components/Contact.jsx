import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
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
              Contact
              <span className="text-blue-500"> CarPoint</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              Have questions? Need help choosing your dream car?
              Our team is always ready to assist you.
            </p>

          </motion.div>

        </section>

        {/* Contact Cards */}

        <section className="max-w-7xl mx-auto px-6">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl">
                <FaPhoneAlt />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Phone
              </h3>

              <p className="mt-2 text-gray-400">
                +91 98765 43210
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-white text-2xl">
                <FaEnvelope />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Email
              </h3>

              <p className="mt-2 text-gray-400">
                support@carpoint.com
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl">
                <FaMapMarkerAlt />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Office
              </h3>

              <p className="mt-2 text-gray-400">
                Chandigarh, India
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white text-2xl">
                <FaClock />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Working Hours
              </h3>

              <p className="mt-2 text-gray-400">
                Mon - Sat (9AM - 7PM)
              </p>

            </motion.div>

          </div>

        </section>

        {/* Contact Form */}

        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >

              <h2 className="text-3xl font-bold text-white">
                Send Us a Message
              </h2>

              <p className="mt-4 text-gray-400">
                Fill out the form and we'll get back to you within
                24 hours.
              </p>

              <div className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-slate-800 border-slate-700 text-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full bg-slate-800 border-slate-700 text-white"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full bg-slate-800 border-slate-700 text-white"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full bg-slate-800 border-slate-700 text-white"
                ></textarea>

                <button className="btn w-full rounded-full bg-blue-600 hover:bg-blue-700 border-none">

                  <FaPaperPlane />

                  Send Message

                </button>

              </div>

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden"
            >

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Chandigarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-96 w-full"
              ></iframe>

              <div className="p-8">

                <h2 className="text-2xl font-bold text-white">
                  Follow Us
                </h2>

                <p className="mt-3 text-gray-400">
                  Stay connected with CarPoint on social media.
                </p>

                <div className="mt-6 flex gap-4">

                  <Link
                    className="btn btn-circle bg-blue-600 border-none hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </Link>

                  <Link
                    className="btn btn-circle bg-pink-600 border-none hover:bg-pink-700"
                  >
                    <FaInstagram />
                  </Link>

                  <Link
                    className="btn btn-circle bg-cyan-600 border-none hover:bg-cyan-700"
                  >
                    <FaLinkedinIn />
                  </Link>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default ContactPage;