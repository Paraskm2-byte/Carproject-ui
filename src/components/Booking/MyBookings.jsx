import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaCar,
  FaSearch,
  FaSyncAlt,
  FaArrowLeft,
} from "react-icons/fa";

const MyBookings = () => {

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const fetchBookings = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "http://localhost:8081/bookings"
      );

      setBookings(response.data);

    }

    catch(error){

      console.log(error);

    }

    finally{

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchBookings();

  }, []);

  const filteredBookings = bookings.filter((booking) =>
    booking.customerName
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    booking.carName
      .toLowerCase()
      .includes(search.toLowerCase())
  );
const cancelBooking = async (id) => {

  const confirmCancel = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (!confirmCancel) return;

  try {

    await axios.delete(
      `http://localhost:8081/bookings/${id}`
    );

    alert("Booking Cancelled Successfully");

    fetchBookings();

  } catch (error) {

    console.log(error);

    alert("Failed to Cancel Booking");

  }

};
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">

      {/* Header */}

      <motion.div

        initial={{ opacity: 0, y: -40 }}

        animate={{ opacity: 1, y: 0 }}

        className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10"

      >

        <div>

          <h1 className="text-4xl font-bold text-white flex items-center gap-3">

            <FaCalendarAlt />

            My Bookings

          </h1>

          <p className="text-gray-400 mt-2">

            View and manage your booked test drives.

          </p>

        </div>

        <div className="flex gap-3">

          <button

            onClick={fetchBookings}

            className="btn btn-outline btn-info"

          >

            <FaSyncAlt />

            Refresh

          </button>

          <Link

            to="/"

            className="btn btn-primary"

          >

            <FaArrowLeft />

            Home

          </Link>

        </div>

      </motion.div>

      {/* Search */}

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.2 }}

        className="mb-8"

      >

        <label className="input input-bordered flex items-center gap-3 bg-white/10 border-white/20">

          <FaSearch className="text-cyan-400" />

          <input

            type="text"

            className="grow text-white"

            placeholder="Search by Customer or Car..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

          />

        </label>

      </motion.div>
            {/* Booking Table */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
      >

        <table className="table text-white">

          <thead>

            <tr className="text-cyan-400">

              <th>#</th>

              <th>Car</th>

              <th>Customer</th>

              <th>Phone</th>

              <th>Date</th>

              <th>Time</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-20"
                >

                  <span className="loading loading-spinner loading-lg text-info"></span>

                </td>

              </tr>

            ) : filteredBookings.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-20 text-gray-400"
                >

                  No Bookings Found

                </td>

              </tr>

            ) : (

              filteredBookings.map((booking, index) => (

                <tr
                  key={booking.id}
                  className="hover:bg-white/5 transition"
                >

                  <td>

                    {index + 1}

                  </td>

                  <td>

                    <div className="flex items-center gap-3">

                      <img
                        src={booking.imageUrl}
                        alt={booking.carName}
                        className="w-20 h-14 rounded-xl object-cover"
                      />

                      <div>

                        <h3 className="font-semibold">

                          {booking.carName}

                        </h3>

                        <p className="text-sm text-gray-400">

                          {booking.brand}

                        </p>

                      </div>

                    </div>

                  </td>

                  <td>

                    {booking.customerName}

                  </td>

                  <td>

                    {booking.phone}

                  </td>

                  <td>

                    {booking.bookingDate}

                  </td>

                  <td>

                    {booking.bookingTime}

                  </td>

                  <td>

                    <span
                      className={`badge
                        ${
                          booking.status === "Approved"
                            ? "badge-success"
                            : booking.status === "Rejected"
                            ? "badge-error"
                            : "badge-warning"
                        }`}
                    >
                      {booking.status}
                    </span>

                  </td>

                  <td>

                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="btn btn-error btn-sm"
                    >
                      Cancel
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </motion.div>
            {/* Footer */}

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.4 }}

        className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4"

      >

        <div className="stats shadow bg-white/10 border border-white/20">

          <div className="stat">

            <div className="stat-title text-gray-300">

              Total Bookings

            </div>

            <div className="stat-value text-info">

              {filteredBookings.length}

            </div>

          </div>

        </div>

        <Link
          to="/"
          className="btn btn-outline btn-info"
        >
          <FaArrowLeft />

          Back to Home

        </Link>

      </motion.div>

    </div>

  );

};

export default MyBookings;