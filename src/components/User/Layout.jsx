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
    <div className='bg-[#212631] text-white'>
        <aside className='h-full border-r-2 border-gray-700 fied top-0 left-0 fixed' style={{width:menuBar, transition:'0.3s'}}></aside>
        <section className='h-screen  ml' style={{marginLeft:menuBar , transition: '0.3s'}}>
           <nav className="p-8 border-b-2 border-gray-700 shadow flex justify-between items-center">
                <div className='flex gap-4'>
                    <button className=' rounded text-gray-400 w-8 h-8 hover:bg-gray-200' onClick={()=>setMenuBar(menuBar === 280 ? 0 : 280)}>
                    <i class="ri-menu-line text-2xl"></i>
                    </button>
                    <h1 className='text-md font-semibold'>Cloth brands</h1>
                </div>
                <div ref={userMenuRef}>
                    <button className='relative ' >
                          <img src="/src/assets/avatar.png" alt="" className='w-12 h-10 rounded-full bg-yellow-300'onClick={()=>setUserMenu(!userMenu)}/>
                          {
                            userMenu &&  
                            <div className="absolute top-12 bg-[#030712] right-0 p-6 shadow-lg transition-all " style={{transition:'0.3s'}}>
                            <div className='text-gray-300'>
                                <h1 className='font-semibold text-lg '>Saikat Dutta</h1>
                                <p>saikat2018dutta18@gamil.com</p>
                                <div className="border h-px border-gray-500 my-4"/>
                                <button>
                                    <i className="ri-logout-circle-r-line mr-2"></i>
                                    Logout
                                </button>
                            </div>
                        </div>
                          }
                    </button>
                </div>
           </nav>
           <Outlet/>
        </section>
    </div>
  )
}

export default AdminLayot