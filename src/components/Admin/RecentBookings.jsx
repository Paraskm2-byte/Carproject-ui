import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaCar,
  FaEye,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const bookings = [
  {
    id: 1,
    customer: "Rahul Sharma",
    car: "BMW M4",
    date: "29 Jul 2026",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Aman Verma",
    car: "Audi A6",
    date: "29 Jul 2026",
    time: "01:00 PM",
    status: "Confirmed",
  },
  {
    id: 3,
    customer: "Priya Singh",
    car: "Mercedes C-Class",
    date: "30 Jul 2026",
    time: "11:00 AM",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Neha Kapoor",
    car: "Tesla Model 3",
    date: "30 Jul 2026",
    time: "03:30 PM",
    status: "Pending",
  },
];

const RecentBookings = () => {
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

              <FaCalendarAlt className="text-blue-500" />

              Recent Bookings

            </h2>

            <p className="mt-2 text-gray-400">
              Latest customer bookings
            </p>

          </div>

          <button className="btn btn-primary rounded-xl">
            View All
          </button>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="table">

            <thead>

              <tr className="text-gray-300">

                <th>Customer</th>
                <th>Car</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th className="text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking, index) => (

                <motion.tr
                  key={booking.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="hover:bg-slate-800 transition"
                >

                  <td>

                    <div className="flex items-center gap-3">

                      <FaUser className="text-blue-500" />

                      <span className="font-medium text-white">
                        {booking.customer}
                      </span>

                    </div>

                  </td>

                  <td>

                    <div className="flex items-center gap-3">

                      <FaCar className="text-cyan-400" />

                      {booking.car}

                    </div>

                  </td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>

                    <span
                      className={`badge ${
                        booking.status === "Confirmed"
                          ? "badge-success"
                          : booking.status === "Pending"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button
                        className="btn btn-sm btn-info"
                        title="View"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="btn btn-sm btn-success"
                        title="Approve"
                      >
                        <FaCheck />
                      </button>

                      <button
                        className="btn btn-sm btn-error"
                        title="Cancel"
                      >
                        <FaTimes />
                      </button>

                    </div>

                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </section>
  );
};

export default RecentBookings;