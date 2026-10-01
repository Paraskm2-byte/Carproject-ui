import { FaCarSide } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 h-20 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-6 lg:px-12">

      {/* Left */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">

          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-60 rounded-2xl bg-slate-900 shadow-2xl p-3 z-[100]"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-white"
        >
          <FaCarSide className="text-blue-500 text-3xl" />
          <span>
            Car<span className="text-blue-500">Point</span>
          </span>
        </Link>

      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-2 xl:gap-4 text-base font-medium text-gray-300">

          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/cars" className="hover:text-blue-400">Cars</Link></li>
          <li><Link to="/brands" className="hover:text-blue-400">Brands</Link></li>
          <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>

        </ul>

      </div>

      {/* Right */}
      <div className="navbar-end gap-2 sm:gap-3">

        {/* Search */}
        <button className="btn btn-circle btn-ghost text-white hover:bg-slate-800">
          <FiSearch size={20} />
        </button>

        {/* Login */}
        <Link
          to="/login"
          className="btn btn-ghost text-white hidden md:flex"
        >
          Login
        </Link>

        {/* CTA */}
        <Link
          to="/cars"
          className="btn rounded-full bg-blue-600 hover:bg-blue-700 border-none text-white px-6"
        >
          Book Test Drive
        </Link>

      </div>

    </div>
  );
};

export default Navbar;