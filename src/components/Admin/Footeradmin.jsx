import { Link } from "react-router-dom";
import {
  FaCar,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "./Footeradmin";
const Footeradmin = () => {
  return (
    <footer className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Top */}

      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-600 p-3">

              <FaCar className="text-2xl text-white" />

            </div>

            <div>

              <h2 className="text-4xl font-bold text-white">

                CarPoint showroom

              </h2>

              <p className="text-sm text-gray-400">

                Admin Dashboard

              </p>

            </div>

          </div>

          <p className="mt-5 text-sm leading-7 text-gray-400">

            Manage vehicles, customers, bookings and showroom
            operations efficiently with the CarPoint Admin Panel.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">

            Quick Links

          </h3>

          <div className="flex flex-col gap-3">

            <Link
              to="/admin/dashboard"
              className="text-gray-400 hover:text-blue-400"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/add-car"
              className="text-gray-400 hover:text-blue-400"
            >
              Add Car
            </Link>

            <Link
              to="/admin/car-table"
              className="text-gray-400 hover:text-blue-400"
            >
              Manage Cars
            </Link>

            <Link
              to="/my-bookings"
              className="text-gray-400 hover:text-blue-400"
            >
              Bookings
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">

            Contact

          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <FaEnvelope className="text-blue-500" />

              <span className="text-gray-400">

                admin@carpoint.com

              </span>

            </div>

            <div className="mt-6 flex gap-4">

              <button className="btn btn-circle btn-sm bg-slate-800 border-none hover:bg-blue-600">

                <FaGithub />

              </button>

              <button className="btn btn-circle btn-sm bg-slate-800 border-none hover:bg-blue-600">

                <FaLinkedin />

              </button>

              <button className="btn btn-circle btn-sm bg-slate-800 border-none hover:bg-blue-600">

                <FaTwitter />

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 px-8 py-5 text-sm text-gray-500 md:flex-row">

        <p>

          © 2026 CarPoint. All Rights Reserved.

        </p>

        <div className="flex gap-5">

          <span>Version 1.0.0</span>

          <span>|</span>

          <span>Made with ❤️ in React</span>

        </div>

      </div>

    </footer>
  );
};

export default Footeradmin;