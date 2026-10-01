import { Link } from "react-router-dom";
import {
    FaBars,
    FaBell,
    FaSearch,
    FaUserCircle,
    FaCog,
    FaSignOutAlt, FaTimes
} from "react-icons/fa";

const Topbar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-lg">
            {/* Left */}

            <div className="flex items-center gap-4">

                <button
                    onClick={toggleSidebar}
                    className="btn btn-circle bg-slate-800 border-slate-700 text-white hover:bg-blue-600"
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div>

                    <h1 className="text-2xl font-bold text-white">
                        Dashboard
                    </h1>

                    <p className="text-sm text-gray-400">
                        Welcome back, Admin 👋
                    </p>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

                {/* Search */}

                <label className="input hidden md:flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 text-white">

                    <FaSearch className="text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="grow bg-transparent"
                    />

                </label>

                {/* Notification */}

                <button className="btn btn-circle bg-slate-800 border-slate-700 text-white hover:bg-slate-700">

                    <div className="indicator">

                        <FaBell />

                        <span className="badge badge-xs badge-error indicator-item"></span>

                    </div>

                </button>

                {/* Profile */}

                <div className="dropdown dropdown-end">

                    <label
                        tabIndex={0}
                        className="btn btn-circle avatar border border-slate-700 bg-slate-800"
                    >
                        <FaUserCircle className="text-2xl text-white" />
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[100] mt-3 w-60 rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-xl"
                    >

                        <li className="pointer-events-none mb-2 px-4 py-2">

                            <p className="font-semibold text-white">
                                Administrator
                            </p>

                            <span className="text-xs text-gray-400">
                                admin@carpoint.com
                            </span>

                        </li>

                        <div className="divider my-1"></div>

                        <li>
                            <Link to="/profile">
                                <FaUserCircle />
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link to="/admin/settings">
                                <FaCog />
                                Settings
                            </Link>
                        </li>

                        <div className="divider my-1"></div>

                        <li>
                            <button className="text-red-500">
                                <FaSignOutAlt />
                                Logout
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </header>
    );
};

export default Topbar;