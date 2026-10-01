import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

import car from "../../assets/bmw.jpg";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid w-full gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="hidden lg:flex flex-col justify-center"
          >

            <span className="uppercase tracking-[6px] text-blue-500 font-semibold">

              Welcome Back

            </span>

            <h1 className="mt-5 text-6xl font-bold text-white leading-tight">

              Continue Your

              <span className="text-blue-500">

                {" "}Luxury Journey

              </span>

            </h1>

            <p className="mt-8 text-slate-400 leading-8">

              Sign in to access your bookings,
              wishlist and premium vehicle collection.

            </p>

            <motion.img

              whileHover={{ scale: 1.03 }}

              transition={{ duration: .5 }}

              src={car}

              className="mt-12 rounded-[35px] shadow-2xl"

              alt="Luxury Car"

            />

          </motion.div>

          {/* Login Card */}

          <motion.div

            initial={{ opacity: 0, x: 80 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: .8 }}

            className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"

          >

            <h2 className="text-4xl font-bold text-white">

              Login

            </h2>

            <p className="mt-3 text-slate-400">

              Access your CarPoint account

            </p>

            <form className="mt-10 space-y-6">

              {/* Email */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-slate-300">

                  <FaEnvelope />

                  Email

                </label>

                <input

                  type="email"

                  placeholder="Enter your email"

                  className="input input-bordered w-full bg-slate-900 border-white/10 text-white"

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

                    className="input input-bordered w-full bg-slate-900 border-white/10 text-white pr-14"

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
                            {/* Remember Me & Forgot Password */}

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">

                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />

                  Remember Me

                </label>

                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Forgot Password?
                </a>

              </div>

              {/* Login Button */}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn w-full rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500 text-lg text-white"
              >
                Login
              </motion.button>

            </form>

            {/* Divider */}

            <div className="divider text-slate-400 my-8">
              OR CONTINUE WITH
            </div>

            {/* Social Login */}

            <div className="grid grid-cols-2 gap-4">

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-black border-none hover:bg-gray-200"
              >
                <FaGoogle className="text-red-500 text-xl" />
                Google
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-[#1877F2] text-white border-none hover:bg-[#166FE5]"
              >
                <FaFacebookF />
                Facebook
              </motion.button>

            </div>

            {/* Register */}

            <p className="mt-8 text-center text-slate-400">

              Don't have an account?

              <a
                href="/register"
                className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
              >
                Register Now
              </a>

            </p>

            {/* Benefits */}

            <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

              <h3 className="text-xl font-bold text-white">
                Why Sign In?
              </h3>

              <ul className="mt-4 space-y-3 text-slate-300">

                <li>✅ Save your favourite luxury cars</li>

                <li>✅ Book test drives instantly</li>

                <li>✅ Track your bookings</li>

                <li>✅ Get exclusive premium offers</li>

              </ul>

            </div>

          </motion.div>

        </div>

      </div>
            {/* ================= LOGIN SUCCESS MODAL ================= */}

      {/* Uncomment later when you connect backend */}

      {/*
      {loginSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <motion.div
            initial={{ scale: .5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .4 }}
            className="w-[90%] max-w-md rounded-3xl border border-blue-500 bg-slate-900 p-10 text-center shadow-2xl"
          >

            <div className="text-7xl">
              🎉
            </div>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Login Successful
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              Welcome back to CarPoint.
              Redirecting to your dashboard...
            </p>

          </motion.div>

        </div>
      )}
      */}

      {/* ================= SECURITY TIPS ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="mt-24 rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >

        <h2 className="text-center text-4xl font-bold text-white">

          Your Security Matters

        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-900 p-6">

            <div className="text-5xl">
              🔒
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">

              Secure Login

            </h3>

            <p className="mt-3 text-slate-400">

              Your account is protected using secure authentication.

            </p>

          </div>

          <div className="rounded-2xl bg-slate-900 p-6">

            <div className="text-5xl">
              🛡️
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">

              Privacy

            </h3>

            <p className="mt-3 text-slate-400">

              Your personal information remains private and secure.

            </p>

          </div>

          <div className="rounded-2xl bg-slate-900 p-6">

            <div className="text-5xl">
              🚗
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">

              Premium Access

            </h3>

            <p className="mt-3 text-slate-400">

              Unlock bookings, wishlist and exclusive luxury vehicles.

            </p>

          </div>

        </div>

      </motion.div>

      {/* ================= FOOTER CTA ================= */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="mt-24 mb-10 rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-14 text-center"
      >

        <h2 className="text-5xl font-bold text-white">

          Discover Your Dream Car

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">

          Sign in to explore premium vehicles, manage bookings,
          save your favourites and enjoy the complete CarPoint experience.

        </p>

        <button className="btn mt-10 rounded-full border-none bg-white px-12 text-lg text-blue-700 hover:bg-slate-200">

          Explore Cars

        </button>

      </motion.div>

    </section>
  );
};

export default Login;