import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import mercedes from '../../assets/mercedes.jpg'

import {
  FaCar,
  FaPlus,
  FaTimes,
  FaSearch,
  FaSortAmountDownAlt,
  FaSyncAlt,
} from "react-icons/fa";

const CarTable = () => {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("id");
  const [dir, setDir] = useState("desc");
  const [snackbar, setSnackbar] = useState({
    show: false,
    type: "success",
    message: "",
  });
  const fetchCars = async () => {

    try {

      setLoading(true);

      let url = "";
      let params = {};

      if (search.trim() === "") {
        // Normal list
        url = "http://localhost:8081/car/getall";

        params = {
          pageNo: page,
          pageSize: size,
          sortBy: sortBy,
          dir: dir,
        };
      } else {
        // Search
        url = "http://localhost:8081/car/search";

        params = {
          search: search,
          pageNo: page,
          pageSize: size,
        };
      }

      const response = await axios.get(url, { params });
      setCars(response.data.content)
      setTotalPages(response.data.totalPages)


    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchCars();

  }, [page, search, sortBy, dir]);


  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const deleteCar = async () => {
    try {
      setDeleting(true);

      await axios.delete(
        `http://localhost:8081/admin/delete/${selectedCarId}`
      );

      setCars((prev) =>
        prev.filter((car) => car.id !== selectedCarId)
      );

      setDeleteModal(false);
      setSelectedCarId(null);
      setSnackbar({
        show: true,
        type: "success",
        message: "Car deleted successfully",
      });

      setTimeout(() => {
        setSnackbar((prev) => ({ ...prev, show: false }));
      }, 3000);
    } catch (error) {
      console.log(error);
      setSnackbar({
        show: true,
        type: "error",
        message: "Unable to delete the car. Please try again.",
      });

      setTimeout(() => {
        setSnackbar((prev) => ({ ...prev, show: false }));
      }, 3000);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">

        {/* Header */}

        <motion.div

          initial={{ opacity: 0, y: -40 }}

          animate={{ opacity: 1, y: 0 }}

          className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10"

        >

          <div>

            <h1 className="text-4xl font-bold text-white flex items-center gap-3">

              <FaCar />

              Manage Cars

            </h1>

            <p className="text-gray-400 mt-2">

              View, Search, Edit & Delete Cars

            </p>

          </div>

          <div className="flex gap-3">

            <button

              onClick={fetchCars}

              className="btn btn-outline btn-info"

            >

              <FaSyncAlt />

              Refresh text

            </button>

            <Link

              to="/admin/add-car"

              className="btn btn-primary"

            >

              <FaPlus />

              Add Car

            </Link>

          </div>

        </motion.div>

        {/* Search */}

        {/* Compact Premium Search + Sort */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-4"
        >

          {/* Search */}
          <div className="relative w-full lg:w-[430px]">

            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />

            <input
              type="text"
              value={search}
              placeholder="Search by name or brand..."
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="w-full rounded-full border border-slate-700 bg-slate-900/80 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
            />

            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setPage(0);
                  fetchCars();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <FaTimes size={14} />
              </button>
            )}

          </div>

          {/* Sort */}

          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <FaSortAmountDownAlt />
              </div>

              <select
                value={`${sortBy}-${dir}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split("-");
                  setSortBy(field);
                  setDir(direction);
                }}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option className="text-black" value="id-desc">Newest First</option>
                <option className="text-black" value="id-asc">Oldest First</option>
                <option className="text-black" value="price-asc">Price: Low → High</option>
                <option className="text-black" value="price-desc">Price: High → Low</option>
                <option className="text-black" value="brand-asc">Brand A → Z</option>
                <option className="text-black" value="brand-desc">Brand Z → A</option>
              </select>
            </div>
          </div>


        </motion.div>

        {/* Table */}

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

                <th>Image</th>

                <th>Name</th>

                <th>Brand</th>

                <th>Price</th>

                <th>Fuel</th>

                <th>Transmission</th>

                <th>Seats</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan="9"
                    className="text-center py-20"
                  >

                    <span className="loading loading-spinner loading-lg text-info"></span>

                  </td>

                </tr>

              ) : cars.length === 0 ? (

                <tr>

                  <td
                    colSpan="9"
                    className="text-center py-20 text-gray-400"
                  >

                    No Cars Found

                  </td>

                </tr>

              ) : (

                cars.map((car, index) => (

                  <tr
                    key={car.id}
                    className="hover:bg-white/5 transition"
                  >

                    <td>

                      {index + 1}

                    </td>

                    <td>

                      <img
                        src={mercedes}
                        alt={car.name}
                        className="w-28 h-16 rounded-xl object-cover"
                      />

                    </td>

                    <td className="font-semibold">

                      {car.name}

                    </td>

                    <td>

                      {car.brand}

                    </td>

                    <td className="text-green-400 font-bold">

                      ₹ {Number(car.price).toLocaleString()}

                    </td>

                    <td>

                      {car.fuelType}

                    </td>

                    <td>

                      {car.transmission}

                    </td>

                    <td>

                      {car.seats}

                    </td>

                    <td>

                      <div className="flex gap-2">

                        <Link
                          to={`/admin/update-car/${car.id}`}
                          className="btn btn-info btn-sm"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => {
                            setSelectedCarId(car.id);
                            setDeleteModal(true);
                          }}
                          className="btn btn-error btn-sm"
                        >
                          Delete
                        </button>

                      </div>

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


          <div className="flex flex-col items-center gap-4 mt-8">

            {/* Page Info */}
            <p className="text-sm text-slate-400">
              Page <span className="font-bold text-blue-500">{page + 1}</span> of{" "}
              <span className="font-bold text-white">{totalPages}</span>
            </p>

            {/* Pagination */}
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-2 shadow-xl">

              {/* Previous */}
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaChevronLeft />
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={`w-11 h-11 rounded-xl font-semibold transition-all duration-300
          ${page === index
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-110"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages - 1}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaChevronRight />
              </button>

            </div>

          </div>
          <Link

            to="/admin/dashboard"

            className="btn btn-outline btn-info"

          >

            Back to Dashboard

          </Link>

        </motion.div>

      </div>
      {deleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[340px] rounded-3xl border border-white/10 bg-slate-900/95 p-5 shadow-[0_15px_60px_rgba(0,0,0,.65)]"
          >
            {/* Close */}
            <button
              onClick={() => setDeleteModal(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-red-700/20 ring-1 ring-red-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7H5M10 11v6m4-6v6M9 7V4h6v3m-8 0h10l-1 13H8L7 7z"
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-center text-xl font-bold text-white">
              Delete Car?
            </h2>

            {/* Text */}
            <p className="mt-2 text-center text-sm text-slate-400 leading-6">
              This action will permanently remove the car from your inventory.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeleteModal(false)}
                className="flex-1 rounded-xl border border-slate-700 bg-slate-800 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-cyan-500 hover:bg-slate-700"
              >
                Cancel
              </button>

              <button
                onClick={deleteCar}
                disabled={deleting}
                className="flex-1 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 disabled:opacity-60"
              >
                {deleting ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {snackbar.show && (
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 80 }}
    transition={{ duration: 0.3 }}
    className="fixed bottom-6 right-6 z-[9999]"
  >
    <div
      className={`flex items-center gap-4 w-[360px] rounded-2xl px-5 py-4 border shadow-2xl backdrop-blur-xl
      ${
        snackbar.type === "success"
          ? "bg-emerald-500/10 border-emerald-500/30"
          : "bg-red-500/10 border-red-500/30"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center
        ${
          snackbar.type === "success"
            ? "bg-gradient-to-br from-emerald-500 to-green-600"
            : "bg-gradient-to-br from-red-500 to-red-700"
        }`}
      >
        {snackbar.type === "success" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-white font-bold">
          {snackbar.type === "success" ? "Deleted Successfully" : "Delete Failed"}
        </h3>

        <p className="text-sm text-slate-300">
          {snackbar.message}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setSnackbar({ ...snackbar, show: false })}
        className="text-slate-400 hover:text-white transition"
      >
        ✕
      </button>
    </div>
  </motion.div>
)}
    </>
  );

};

export default CarTable;
