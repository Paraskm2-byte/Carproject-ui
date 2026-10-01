import { Link, useLocation } from "react-router-dom";
import {
  FaCarSide,
  FaChartPie,
  FaPlusCircle,
  FaTable,
  FaClipboardList,
  FaUsers,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { pathname } = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaChartPie />,
    },
    {
      name: "Add Car",
      path: "/admin/add-car",
      icon: <FaPlusCircle />,
    },
    {
      name: "Manage Cars",
      path: "/admin/car-table",
      icon: <FaTable />,
    },
    {
      name: "Bookings",
      path: "/admin/my-bookings",
      icon: <FaClipboardList />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
  ];

  const accountMenus = [
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <FaUserCircle />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-40
          flex h-screen w-64 flex-col
          border-r border-slate-800
          bg-slate-950
          shadow-2xl
          transition-transform duration-300 ease-in-out

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* ================= LOGO ================= */}
        <div className="flex h-20 shrink-0 items-center gap-3 border-b border-slate-800 px-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20">
            <FaCarSide className="text-xl text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              CarPoint
            </h1>

            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
              Admin Panel
            </p>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="flex-1 overflow-y-auto px-3 py-6 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700">
          
          {/* Main Menu */}
          <div className="mb-7">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Main Menu
            </p>

            <nav className="space-y-1.5">
              {menus.map((menu) => {
                const active = isActive(menu.path);

                return (
                  <Link
                    key={menu.path}
                    to={menu.path}
                    onClick={closeSidebar}
                    className={`
                      group relative flex items-center gap-3
                      rounded-xl px-3.5 py-3
                      transition-all duration-200

                      ${
                        active
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : "text-slate-400 hover:bg-slate-900 hover:text-white"
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {active && (
                      <span className="absolute left-0 h-6 w-1 rounded-r-full bg-cyan-300" />
                    )}

                    <span
                      className={`
                        flex h-9 w-9 items-center justify-center rounded-lg
                        text-base transition-all

                        ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-slate-900 text-slate-400 group-hover:bg-slate-800 group-hover:text-blue-400"
                        }
                      `}
                    >
                      {menu.icon}
                    </span>

                    <span className="text-sm font-semibold">
                      {menu.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Account */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Account
            </p>

            <nav className="space-y-1.5">
              {accountMenus.map((menu) => {
                const active = isActive(menu.path);

                return (
                  <Link
                    key={menu.path}
                    to={menu.path}
                    onClick={closeSidebar}
                    className={`
                      group flex items-center gap-3
                      rounded-xl px-3.5 py-3
                      transition-all duration-200

                      ${
                        active
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : "text-slate-400 hover:bg-slate-900 hover:text-white"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-9 w-9 items-center justify-center rounded-lg
                        text-base

                        ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-slate-900 text-slate-400 group-hover:text-blue-400"
                        }
                      `}
                    >
                      {menu.icon}
                    </span>

                    <span className="text-sm font-semibold">
                      {menu.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ================= ADMIN PROFILE ================= */}
        <div className="shrink-0 border-t border-slate-800 bg-slate-950 p-3">
          
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-slate-900/80 p-3">
            
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
              A
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                Administrator
              </p>

              <p className="truncate text-[11px] text-slate-500">
                admin@carpoint.com
              </p>
            </div>

            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          </div>

          {/* Logout */}
          <button
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl border border-red-500/10
              bg-red-500/10
              px-4 py-2.5
              text-sm font-semibold text-red-400
              transition-all duration-200
              hover:bg-red-500
              hover:text-white
            "
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;