import { motion } from "framer-motion";
import {
  FaCar,
  FaUsers,
  FaClipboardList,
  FaRupeeSign,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Cars",
    value: 156,
    change: "+12%",
    icon: FaCar,
    bg: "from-blue-600 to-cyan-500",
  },
  {
    title: "Users",
    value: 1248,
    change: "+8%",
    icon: FaUsers,
    bg: "from-purple-600 to-pink-500",
  },
  {
    title: "Bookings",
    value: 326,
    change: "+18%",
    icon: FaClipboardList,
    bg: "from-emerald-500 to-green-600",
  },
  {
    title: "Revenue",
    value: "₹24.5L",
    change: "+21%",
    icon: FaRupeeSign,
    bg: "from-orange-500 to-yellow-500",
  },
];

const StatCards = () => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all"
            >
              {/* Hover Glow */}

              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.bg} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      {card.title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-white">
                      {card.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.bg} text-3xl text-white shadow-lg`}
                  >
                    <Icon />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-400">
                    <FaArrowUp />

                    <span className="font-semibold">
                      {card.change}
                    </span>
                  </div>

                  <span className="text-sm text-gray-500">
                    This Month
                  </span>
                </div>

                <progress
                  className="progress progress-info mt-4 w-full"
                  value="80"
                  max="100"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatCards;