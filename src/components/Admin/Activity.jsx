import { motion } from "framer-motion";
import {
  FaCar,
  FaUserPlus,
  FaCalendarCheck,
  FaRupeeSign,
  FaClock,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaCar />,
    title: "New BMW M4 Added",
    subtitle: "2 minutes ago",
    color: "bg-blue-600",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Audi A6 Test Drive Booked",
    subtitle: "12 minutes ago",
    color: "bg-green-600",
  },
  {
    icon: <FaUserPlus />,
    title: "New User Registered",
    subtitle: "35 minutes ago",
    color: "bg-purple-600",
  },
  {
    icon: <FaRupeeSign />,
    title: "₹8,50,000 Payment Received",
    subtitle: "1 hour ago",
    color: "bg-orange-500",
  },
];

const Activity = () => {
  return (
    <section className="mt-8">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
      >

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Recent Activity
            </h2>

            <p className="mt-2 text-gray-400">
              Latest updates from your showroom
            </p>

          </div>

          <FaClock className="text-3xl text-blue-500" />

        </div>

        {/* Timeline */}

        <div className="space-y-5">

          {activities.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 6,
              }}
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-800 p-4 transition-all hover:border-blue-500"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-xl text-white ${item.color}`}
              >
                {item.icon}
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Activity;