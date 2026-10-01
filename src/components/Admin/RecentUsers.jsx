import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCircle,
} from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    role: "Customer",
    status: "Active",
    joined: "Today",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Aman Verma",
    email: "aman@gmail.com",
    phone: "+91 9988776655",
    role: "Customer",
    status: "Active",
    joined: "Yesterday",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "+91 9876501234",
    role: "Dealer",
    status: "Pending",
    joined: "2 Days Ago",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    email: "neha@gmail.com",
    phone: "+91 9123456789",
    role: "Customer",
    status: "Blocked",
    joined: "Last Week",
    image: "https://i.pravatar.cc/150?img=41",
  },
];

const RecentUsers = () => {
  return (
    <section className="mt-8">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-800 bg-slate-900 shadow-xl"
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-6">

          <div>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-white">

              <FaUser className="text-blue-500" />

              Recent Users

            </h2>

            <p className="mt-2 text-gray-400">

              Newly registered users

            </p>

          </div>

          <button className="btn btn-primary rounded-xl">

            View All

          </button>

        </div>

        {/* Users */}

        <div className="divide-y divide-slate-800">

          {users.map((user, index) => (

            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between hover:bg-slate-800/40 transition"
            >

              {/* Left */}

              <div className="flex items-center gap-4">

                <img
                  src={user.image}
                  alt={user.name}
                  className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
                />

                <div>

                  <h3 className="text-lg font-semibold text-white">

                    {user.name}

                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">

                    <FaEnvelope />

                    {user.email}

                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">

                    <FaPhone />

                    {user.phone}

                  </p>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-wrap items-center gap-3">

                <span className="badge badge-info">

                  {user.role}

                </span>

                <span
                  className={`badge ${
                    user.status === "Active"
                      ? "badge-success"
                      : user.status === "Pending"
                      ? "badge-warning"
                      : "badge-error"
                  }`}
                >
                  <FaCircle className="mr-1 text-[8px]" />

                  {user.status}

                </span>

                <span className="badge badge-outline text-gray-300">

                  {user.joined}

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default RecentUsers;