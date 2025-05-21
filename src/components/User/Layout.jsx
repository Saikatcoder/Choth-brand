import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const AdminLayot = () => {
  const [menuBar, setMenuBar] = useState(0);
  const [userMenu, setUserMenu] = useState(false);
  const userMenuRef = useRef();
  const location = useLocation();
  console.log(location.pathname);

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const menus = [
    {
      label: "Dashbord",
      icon: (
        <i className="ri-dashboard-horizontal-line mr-2 text-amber-300"></i>
      ),
      link: "/admin/dashbord",
    },
    {
      label: "Customer",
      icon: (
        <i className="ri-user-received-fill mr-2 text-amber-300"></i>
      ),
      link: "/admin/customer",
    },
    {
      label: " Products",
      icon: <i className="ri-shopping-cart-line mr-2 text-amber-300"></i>,
      link: "/admin/products",
    },
    {
      label: "Orders",
      icon: <i className="ri-file-list-3-line text-amber-300 mr-2"></i>,
      link: "/admin/orders",
    },
    {
      label: "payments",
      icon: <i className="ri-money-rupee-circle-line text-amber-300 mr-2"></i>,
      link: "/admin/payments",
    },
    {
      label: "Settings",
      icon: <i className="ri-settings-3-line text-amber-300 mr-2"></i>,
      link: "/admin/setting",
    },
  ];
  return (
    <div className="flex bg-[#1e293b] text-white min-h-screen relative">
      {/* Sidebar */}
      <aside
        className={`bg-[#0f172a] fixed top-0 left-0 z-30 h-full shadow-lg transition-all duration-300 overflow-y-auto 
        ${menuBar ? "w-64" : "w-0"} md:w-64`}
      >
        <div className={`p-6 ${menuBar ? "block" : "hidden"} md:block`}>
          <h1 className="text-2xl font-bold text-gray-200 mb-10 tracking-wide">
            🧵 Cloth Admin
          </h1>
          <nav className="space-y-4 text-sm ">
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                onClick={() => {
                  if (window.innerWidth < 768) setMenuBar(false); // md se chhoti screen
                }}
                style={{
                  background:
                    location.pathname === item.link ? "gray" : "transparent",
                }}
                className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-[15px]"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
               <button  className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-[15px] w-full border text-red-400" >
                <i className="ri-logout-circle-r-line mr-2">Logout</i>
          </button>
          </nav>
       
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 flex flex-col md:ml-64 w-full min-h-screen">
        {/* Navbar */}
        <nav className="bg-[#0f172a] shadow px-4 py-4 flex justify-between items-center border-b border-gray-700 flex-wrap">
          <div className="flex items-center gap-4">
            <button
              className="text-gray-400 hover:text-white transition md:hidden"
              onClick={() => setMenuBar(!menuBar)}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
            <h2 className="text-lg font-semibold tracking-wide whitespace-nowrap">
              Cloth Brands Dashboard
            </h2>
          </div>

          {/* User Avatar */}
          <div className="relative mt-2 md:mt-0" ref={userMenuRef}>
            <img
              src="/src/assets/avatar.png"
              onClick={() => setUserMenu(!userMenu)}
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400 shadow"
            />
            {userMenu && (
              <div className="absolute right-0 top-12 bg-[#1e293b] border border-gray-700 p-4 rounded-md w-60 shadow-xl z-50">
                <h3 className="text-lg font-semibold">Saikat Dutta</h3>
                <p className="text-sm text-gray-400">
                  saikat2018dutta18@gmail.com
                </p>
                <div className="border-t border-gray-600 my-3" />
                <button className="flex items-center text-sm gap-2 text-red-400 hover:text-red-300">
                  <i className="ri-logout-circle-r-line text-lg"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Outlet Content */}
        <div className="flex-1 p-4 md:p-6 overflow-auto bg-[#1e293b]">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AdminLayot;
