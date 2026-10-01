import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import car from "../../assets/bmw.jpg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 py-20">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >

            <span className="uppercase tracking-[6px] text-blue-500 font-semibold">
              Join CarPoint
            </span>

            <h1 className="mt-5 text-6xl font-bold text-white leading-tight">
              Create Your
              <span className="text-blue-500"> Dream Garage</span>
            </h1>

            <p className="mt-8 text-slate-400 leading-8">
              Register today and unlock premium features, exclusive offers,
              luxury vehicles and instant test drive bookings.
            </p>

            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src={car}
              alt="Luxury Car"
              className="mt-10 rounded-[35px] shadow-2xl"
            />

          </motion.div>

          {/* Register Card */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <h2 className="text-4xl font-bold text-white">
              Create Account
            </h2>

            <p className="mt-3 text-slate-400">
              Start your luxury journey with CarPoint.
            </p>

            <form className="mt-10 space-y-6">

              {/* Name */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaUser />
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Smith"
                  className="input input-bordered w-full bg-slate-900 border-white/10 text-white"
                  required
                />

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaEnvelope />
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@email.com"
                  className="input input-bordered w-full bg-slate-900 border-white/10 text-white"
                  required
                />

              </div>

              {/* Phone */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaPhone />
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+44 1234 567890"
                  className="input input-bordered w-full bg-slate-900 border-white/10 text-white"
                  required
                />

              </div>
                            {/* Password */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaLock />
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full border-white/10 bg-slate-900 pr-14 text-white"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>

                </div>

              </div>

              {/* Confirm Password */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaLock />
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="input input-bordered w-full border-white/10 bg-slate-900 pr-14 text-white"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </button>

                </div>

              </div>

              {/* Profile Image */}

              <div>

                <label className="mb-2 block text-slate-300">
                  Profile Image
                </label>

                <input
                  type="file"
                  className="file-input file-input-bordered w-full border-white/10 bg-slate-900 text-white"
                />

              </div>

              {/* Terms */}

              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mt-1"
                  required
                />

                <p className="text-sm leading-6 text-slate-400">
                  I agree to the
                  <span className="cursor-pointer text-blue-400 hover:text-blue-300">
                    {" "}Terms & Conditions
                  </span>
                  {" "}and Privacy Policy.
                </p>

              </div>

              {/* Register Button */}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn w-full rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500 text-lg text-white"
              >
                Create Account
              </motion.button>

            </form>
                        {/* Divider */}

            <div className="divider my-8 text-slate-400">
              OR REGISTER WITH
            </div>

            {/* Social Login */}

            <div className="grid grid-cols-2 gap-4">

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-none bg-white text-black hover:bg-gray-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
                Google
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-none bg-[#1877F2] text-white hover:bg-[#166FE5]"
              >
                Facebook
              </motion.button>

            </div>

            {/* Login Link */}

            <p className="mt-8 text-center text-slate-400">

              Already have an account?

              <a
                href="/login"
                className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
              >
                Login
              </a>

            </p>

            {/* Benefits */}

            <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

              <h3 className="text-2xl font-bold text-white">

                Member Benefits

              </h3>

              <ul className="mt-5 space-y-3 text-slate-300">

                <li>🚘 Save your favourite luxury cars</li>

                <li>📅 Book unlimited test drives</li>

                <li>❤️ Create your personal wishlist</li>

                <li>🔥 Exclusive premium offers</li>

                <li>⭐ Early access to new arrivals</li>

              </ul>

            </div>

          </motion.div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-14 text-center"
        >

          <h2 className="text-5xl font-bold text-white">

            Join CarPoint Today

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">

            Become a member and explore premium vehicles, manage bookings,
            receive exclusive offers, and experience luxury like never before.

          </p>

          <button className="btn mt-10 rounded-full border-none bg-white px-12 text-lg text-blue-700 hover:bg-slate-200">

            Explore Cars

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Register;