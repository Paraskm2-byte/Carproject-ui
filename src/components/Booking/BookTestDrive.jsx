import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCarSide,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import bmw from "../../assets/bmw.jpg";

const BookTestDrive = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 py-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-semibold uppercase tracking-[6px] text-blue-500">
            Luxury Experience
          </span>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Book Your Test Drive
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Schedule your exclusive luxury driving experience with CarPoint.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={bmw}
              alt="BMW"
              className="h-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h2 className="mb-8 text-3xl font-bold text-white">
              Schedule Your Visit
            </h2>

            <form onSubmit={handleBooking} className="space-y-6">

              <div>
                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaUser />
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Smith"
                  className="input input-bordered w-full border-white/10 bg-slate-900 text-white"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaEnvelope />
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@email.com"
                  className="input input-bordered w-full border-white/10 bg-slate-900 text-white"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaPhone />
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="+44 1234 567890"
                  className="input input-bordered w-full border-white/10 bg-slate-900 text-white"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaCarSide />
                  Select Car
                </label>

                <select
                  className="select select-bordered w-full border-white/10 bg-slate-900 text-white"
                >
                  <option>BMW M4 Competition</option>
                  <option>Audi RS7</option>
                  <option>Mercedes AMG GT</option>
                  <option>Porsche 911 Turbo</option>
                  <option>Tesla Model S Plaid</option>
                </select>
              </div>
                            {/* Preferred Date */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaCalendarAlt />
                  Preferred Date
                </label>

                <input
                  type="date"
                  className="input input-bordered w-full border-white/10 bg-slate-900 text-white"
                  required
                />
              </div>

              {/* Preferred Time */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-slate-300">
                  <FaClock />
                  Preferred Time
                </label>

                <input
                  type="time"
                  className="input input-bordered w-full border-white/10 bg-slate-900 text-white"
                  required
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-slate-300">
                  Additional Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us if you have any special requirements..."
                  className="textarea textarea-bordered w-full border-white/10 bg-slate-900 text-white"
                ></textarea>
              </div>

              {/* Submit Button */}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn w-full rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500 text-lg text-white"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : (
                  "Book Test Drive"
                )}
              </motion.button>

            </form>

          </motion.div>

        </div>

        {/* Why Book With CarPoint */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <h2 className="text-center text-5xl font-bold text-white">
            Why Book With CarPoint?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-slate-400">
            Enjoy a premium dealership experience with luxury vehicles,
            expert consultants and personalised service.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "🚘",
                title: "Luxury Cars",
                desc: "Drive the latest premium vehicles."
              },
              {
                icon: "👨‍💼",
                title: "Expert Team",
                desc: "Professional sales consultants."
              },
              {
                icon: "📅",
                title: "Flexible Booking",
                desc: "Choose your own date & time."
              },
              {
                icon: "💎",
                title: "100% Free",
                desc: "No booking charges."
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="text-6xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>
                {/* ================= SUCCESS MODAL ================= */}

        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-[90%] max-w-md rounded-3xl border border-blue-500 bg-slate-900 p-10 text-center shadow-2xl"
            >

              <div className="text-7xl">🎉</div>

              <h2 className="mt-6 text-4xl font-bold text-white">
                Booking Confirmed!
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Thank you for booking your luxury test drive.
                Our representative will contact you shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="btn mt-8 rounded-full border-none bg-blue-600 px-10"
              >
                Awesome!
              </button>

            </motion.div>

          </div>
        )}

        {/* ================= NEWSLETTER ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-28 rounded-[35px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
        >

          <h2 className="text-center text-5xl font-bold text-white">
            Stay Updated
          </h2>

          <p className="mt-5 text-center text-slate-400">
            Subscribe for exclusive offers and luxury car updates.
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1 rounded-full border-white/10 bg-slate-900 text-white"
            />

            <button className="btn rounded-full border-none bg-blue-600 px-10">
              Subscribe
            </button>

          </div>

        </motion.div>

        {/* ================= LUXURY CARS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <h2 className="mb-14 text-center text-5xl font-bold text-white">
            Explore More Luxury Cars
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "BMW M4 Competition",
                price: "£82,000"
              },
              {
                name: "Audi RS7",
                price: "£95,000"
              },
              {
                name: "Mercedes AMG GT",
                price: "£110,000"
              },
            ].map((car, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                <img
                  src={bmw}
                  alt={car.name}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {car.name}
                  </h3>

                  <p className="mt-2 text-blue-400 font-semibold">
                    {car.price}
                  </p>

                  <button className="btn btn-primary mt-6 w-full rounded-full">
                    View Details
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default BookTestDrive;