import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPen,
  FaCrown,
} from "react-icons/fa";

import profile from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 py-20">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-blue-500 font-semibold">
            My Profile
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Manage your account, bookings, favourite luxury cars and
            premium membership from one place.
          </p>

        </motion.div>

        {/* Profile Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="flex flex-col items-center gap-8 lg:flex-row">

              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                src={profile}
                alt="Profile"
                className="h-44 w-44 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
              />

              <div>

                <div className="flex items-center gap-3">

                  <h2 className="text-4xl font-bold text-white">
                    Paras Kumar
                  </h2>

                  <FaCrown className="text-yellow-400 text-3xl" />

                </div>

                <span className="mt-4 inline-block rounded-full bg-blue-600 px-5 py-2 text-white">
                  Premium Member
                </span>

                <p className="mt-6 max-w-xl leading-8 text-slate-400">
                  Passionate car enthusiast who enjoys exploring luxury
                  vehicles and booking premium driving experiences.
                </p>

              </div>

            </div>

            {/* Edit Button */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500 px-8"
            >
              <FaPen />
              Edit Profile
            </motion.button>

          </div>

          {/* User Info */}

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-2xl text-blue-500" />

                <div>

                  <p className="text-slate-400">
                    Email
                  </p>

                  <h3 className="text-white text-xl">
                    paras@gmail.com
                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaPhone className="text-2xl text-blue-500" />

                <div>

                  <p className="text-slate-400">
                    Phone
                  </p>

                  <h3 className="text-white text-xl">
                    +91 98765 43210
                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-2xl text-blue-500" />

                <div>

                  <p className="text-slate-400">
                    Location
                  </p>

                  <h3 className="text-white text-xl">
                    Chandigarh, India
                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaCalendarAlt className="text-2xl text-blue-500" />

                <div>

                  <p className="text-slate-400">
                    Member Since
                  </p>

                  <h3 className="text-white text-xl">
                    January 2026
                  </h3>

                </div>

              </div>

            </div>

          </div>
                    {/* ================= Dashboard ================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-blue-500 font-semibold">
                Dashboard
              </span>

              <h2 className="mt-4 text-5xl font-bold text-white">
                Your Activity
              </h2>

              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Track your luxury car journey, bookings and rewards.
              </p>

            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: "❤️",
                  number: "18",
                  title: "Wishlist",
                  color: "from-pink-500 to-red-500",
                },
                {
                  icon: "🚘",
                  number: "12",
                  title: "Bookings",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "⭐",
                  number: "27",
                  title: "Reviews",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: "🏆",
                  number: "620",
                  title: "Reward Points",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >

                  <div
                    className={`absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-30 bg-gradient-to-r ${item.color}`}
                  />

                  <div className="relative z-10 text-center">

                    <div className="text-6xl">

                      {item.icon}

                    </div>

                    <h3 className="mt-6 text-5xl font-bold text-white">

                      {item.number}

                    </h3>

                    <p className="mt-3 text-xl text-slate-300">

                      {item.title}

                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* ================= Premium Progress ================= */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <div className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <span className="uppercase tracking-[5px] text-blue-500 font-semibold">
                    Premium
                  </span>

                  <h2 className="mt-4 text-4xl font-bold text-white">
                    Membership Progress
                  </h2>

                  <p className="mt-5 max-w-xl leading-8 text-slate-400">
                    Complete more bookings to unlock Platinum membership,
                    exclusive discounts and VIP customer support.
                  </p>

                </div>

                <div className="w-full max-w-sm">

                  <div className="mb-3 flex justify-between text-white">

                    <span>VIP Progress</span>

                    <span>78%</span>

                  </div>

                  <progress
                    className="progress progress-info w-full"
                    value="78"
                    max="100"
                  ></progress>

                  <div className="mt-6 flex justify-between text-slate-400">

                    <span>Current</span>

                    <span>Platinum</span>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>
                    {/* ================= Recent Bookings ================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <div className="flex items-center justify-between">

              <div>

                <span className="uppercase tracking-[5px] text-blue-500 font-semibold">
                  Recent Activity
                </span>

                <h2 className="mt-3 text-5xl font-bold text-white">
                  Recent Bookings
                </h2>

              </div>

              <button className="btn rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500 px-8">
                View All
              </button>

            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">

              {[
                {
                  name: "BMW M4 Competition",
                  image:
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
                  date: "12 Aug 2026",
                  price: "$86,000",
                  status: "Confirmed",
                },
                {
                  name: "Audi RS7",
                  image:
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
                  date: "18 Aug 2026",
                  price: "$94,000",
                  status: "Upcoming",
                },
                {
                  name: "Mercedes AMG GT",
                  image:
                    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
                  date: "25 Aug 2026",
                  price: "$112,000",
                  status: "Pending",
                },
              ].map((car, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
                >

                  <div className="overflow-hidden">

                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                    />

                  </div>

                  <div className="p-6">

                    <div className="flex items-center justify-between">

                      <h3 className="text-2xl font-bold text-white">

                        {car.name}

                      </h3>

                      <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">

                        {car.status}

                      </span>

                    </div>

                    <p className="mt-4 text-slate-400">

                      📅 {car.date}

                    </p>

                    <p className="mt-3 text-3xl font-bold text-blue-400">

                      {car.price}

                    </p>

                    <div className="mt-4 text-yellow-400 text-xl">

                      ⭐⭐⭐⭐⭐

                    </div>

                    <button className="btn mt-8 w-full rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500">

                      View Details

                    </button>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* ================= Favourite Cars ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-blue-500 font-semibold">
                Collection
              </span>

              <h2 className="mt-3 text-5xl font-bold text-white">
                Favourite Cars
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  name: "BMW M5",
                  image:
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700",
                },
                {
                  name: "Audi R8",
                  image:
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700",
                },
                {
                  name: "Porsche 911",
                  image:
                    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700",
                },
                {
                  name: "Ferrari F8",
                  image:
                    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=700",
                },
              ].map((car, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                  }}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
                >

                  <div className="overflow-hidden">

                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-6 text-center">

                    <h3 className="text-2xl font-bold text-white">

                      {car.name}

                    </h3>

                    <div className="mt-4 text-yellow-400 text-xl">

                      ⭐⭐⭐⭐⭐

                    </div>

                    <button className="btn mt-8 w-full rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500">

                      View Car

                    </button>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>
                    {/* ================= Account Settings ================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-blue-500 font-semibold">
                Settings
              </span>

              <h2 className="mt-4 text-5xl font-bold text-white">
                Account Settings
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                Manage your account, bookings and security from one place.
              </p>

            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">

              {/* Quick Actions */}

              <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                <h3 className="text-3xl font-bold text-white">
                  Quick Actions
                </h3>

                <div className="mt-10 space-y-5">

                  <button className="btn w-full rounded-full border-none bg-gradient-to-r from-blue-600 to-cyan-500">
                    ✏️ Edit Profile
                  </button>

                  <button className="btn btn-outline w-full rounded-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                    🔒 Change Password
                  </button>

                  <button className="btn btn-outline w-full rounded-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    ❤️ Wishlist
                  </button>

                  <button className="btn btn-outline w-full rounded-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
                    📅 My Bookings
                  </button>

                  <button className="btn btn-outline w-full rounded-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                    🚪 Logout
                  </button>

                </div>

              </div>

              {/* Premium Card */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -10,
                }}
                className="rounded-[30px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl"
              >

                <div className="text-7xl">
                  👑
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  Premium Membership
                </h3>

                <p className="mt-6 leading-8 text-white/90">
                  Unlock exclusive luxury vehicles, unlimited bookings,
                  VIP support, member-only discounts and early access
                  to premium arrivals.
                </p>

                <ul className="mt-8 space-y-3 text-white">

                  <li>✔ Unlimited Test Drives</li>
                  <li>✔ VIP Customer Support</li>
                  <li>✔ Premium Discounts</li>
                  <li>✔ Early Access</li>

                </ul>

                <button className="btn mt-10 rounded-full border-none bg-white px-10 text-blue-700 hover:bg-slate-200">
                  Upgrade Now
                </button>

              </motion.div>

            </div>

          </motion.div>

          {/* ================= CTA ================= */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 rounded-[35px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-14 text-center"
          >

            <h2 className="text-5xl font-bold text-white">
              Ready For Your Next Luxury Ride?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
              Explore the latest premium cars, book your next test drive,
              and experience luxury like never before.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 md:flex-row">

              <button className="btn rounded-full border-none bg-white px-10 text-blue-700 hover:bg-slate-200">
                Browse Cars
              </button>

              <button className="btn rounded-full border border-white bg-transparent px-10 text-white hover:bg-white hover:text-blue-700">
                Book Test Drive
              </button>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Profile;