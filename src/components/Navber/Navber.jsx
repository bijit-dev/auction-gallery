import { IoNotificationsOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png"

const Navber = () => {
    return (
        <div >
            <nav className=" container mx-auto px-5 ">
                <div className="navbar bg-base-100 shadow-sm py-6">
                    <div className="navbar-start">
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className="navbar-center hidden md:block">
                        <ul className="flex md:gap-5 lg:gap-15 Poppins font-normal">
                            <li className="text-lg lg:text-[25px] text-black">Home</li>
                            <li className="text-lg lg:text-[25px] text-black">Auctions</li>
                            <li className="text-lg lg:text-[25px] text-black">Categories</li>
                            <li className="text-lg lg:text-[25px] text-black">How to works</li>
                        </ul>
                    </div>

                    <div className="navbar-end flex gap-3">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-xs badge-primary indicator-item">0</span>
                            </div>
                        </button>

                        
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:hidden">
                                <li className="text-lg lg:text-[25px] text-white ">Home</li>
                                <li className="text-lg lg:text-[25px] text-white ">Auctions</li>
                                <li className="text-lg lg:text-[25px] text-white ">Categories</li>
                                <li className="text-lg lg:text-[25px] text-white ">How to works</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;