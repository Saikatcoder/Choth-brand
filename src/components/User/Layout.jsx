import { useState , useEffect, useRef } from 'react'
import Product from './Product';
import { Outlet } from 'react-router-dom';
const AdminLayot = () => {
   const [menuBar , setMenuBar] = useState(0);
    const [userMenu , setUserMenu] = useState(false);
    const userMenuRef = useRef();

    // Close user menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setUserMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
    <div className="flex bg-[#1e293b] text-white min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-[#0f172a] h-screen fixed top-0 left-0 transition-all duration-300 ${
          menuBar === 0 ? "w-0" : "w-[280px]"
        } overflow-hidden shadow-lg z-20`}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-6">🧵 Cloth Admin</h1>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">📦 Orders</li>
            <li className="hover:text-white cursor-pointer">🛍️ Products</li>
            <li className="hover:text-white cursor-pointer">👤 Customers</li>
            <li className="hover:text-white cursor-pointer">📊 Analytics</li>
            <li className="hover:text-white cursor-pointer">⚙️ Settings</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <section
        className="flex-1 flex flex-col"
        style={{ marginLeft: `${menuBar}px`, transition: "margin 0.3s" }}
      >
        {/* Navbar */}
        <nav className="bg-[#0f172a] shadow px-6 py-4 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center gap-4">
            <button
              className="text-gray-400 hover:text-white transition"
              onClick={() => setMenuBar(menuBar === 280 ? 0 : 280)}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
            <h2 className="text-lg font-semibold tracking-wide">
              Cloth Brands Dashboard
            </h2>
          </div>

          {/* User Avatar */}
          <div className="relative" ref={userMenuRef}>
            <img
              src="/src/assets/avatar.png"
              onClick={() => setUserMenu(!userMenu)}
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400 shadow"
            />
            {userMenu && (
              <div className="absolute right-0 top-12 bg-[#1e293b] border border-gray-700 p-4 rounded-md w-60 shadow-xl z-10">
                <h3 className="text-lg font-semibold">Saikat Dutta</h3>
                <p className="text-sm text-gray-400">saikat2018dutta18@gmail.com</p>
                <div className="border-t border-gray-600 my-3" />
                <button className="flex items-center text-sm gap-2 text-red-400 hover:text-red-300">
                  <i className="ri-logout-circle-r-line text-lg"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Outlet */}
        <div className="flex-1 p-6 bg-[#1e293b] overflow-auto">
          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default AdminLayot