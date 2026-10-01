import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaCar,
  FaUsers,
  FaClipboardList,
  FaChartLine,
  FaUserCircle,
} from "react-icons/fa";

const actions = [
  {
    title: "Add New Car",
    description: "Register a new vehicle",
    icon: <FaPlus size={28} />,
    path: "/admin/add-car",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Manage Cars",
    description: "View & update inventory",
    icon: <FaCar size={28} />,
    path: "/admin/car-table",
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Customers",
    description: "Manage registered users",
    icon: <FaUsers size={28} />,
    path: "/admin/users",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Bookings",
    description: "Manage test drives",
    icon: <FaClipboardList size={28} />,
    path: "/my-bookings",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Analytics",
    description: "Sales reports",
    icon: <FaChartLine size={28} />,
    path: "/admin/dashboard",
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Profile",
    description: "Update your profile",
    icon: <FaUserCircle size={28} />,
    path: "/profile",
    color: "from-teal-600 to-cyan-500",
  },
];

const QuickActions = () => {
  return (
    <section className="mt-8">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
      >

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-white">
            Quick Actions
          </h2>

          <p className="mt-2 text-gray-400">
            Frequently used admin shortcuts
          </p>

        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {actions.map((action, index) => (

            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -5,
              }}
            >

              <Link
                to={action.path}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-800 p-6 transition-all hover:border-blue-500"
              >

                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${action.color} text-white shadow-lg`}
                >
                  {action.icon}
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {action.description}
                </p>

              </Link>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default QuickActions;