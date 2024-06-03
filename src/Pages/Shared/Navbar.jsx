import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Logo/Logo_png-removebg-preview.png'


const Navbar = () => {
    const [updateProfile, setUpdateProfile] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // Windrow Scrolling , Navbar Animation
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setScrolling(true);
        }
        else {
            setScrolling(false);
        }
    }

    return (
        <div className={`${scrolling ? "top-0 duration-700 z-10" : "-top-20"} sticky bg-white shadow-md border-b border-black border-opacity-30`}>
            <div className="Navbar_container navbar relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="h-4/5 w-4/5" src={logo} alt="Traveler" />
                    </Link>
                    <div className={`absolute z-10 ${updateProfile ? "top-[85px] duration-300" : "-top-[200px] duration-300"}  right-[65px] p-4 bg-slate-500 bg-opacity-85 rounded-lg text-white flex flex-col justify-center items-center`}>
                        <h1>Abdullah</h1>
                        <h3>Update Profile</h3>
                    </div>
                </div>
                <div className="w-full flex gap-4 justify-end items-center">
                    <div className=" navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-4 font-medium">
                            <NavLink to='/'><li className="cursor-pointer">Home</li></NavLink>
                            <NavLink to='/all-tourist-spot'><li className="cursor-pointer">All Tourist Spot</li></NavLink>
                            <NavLink to='/contact'><li className="cursor-pointer">Contact</li></NavLink>
                            <NavLink to='/about'><li className="cursor-pointer">About Us</li></NavLink>

                        </ul>
                    </div>
                    <div className="avatar cursor-pointer placeholder">
                        <div title="Abdullah" onClick={() => setUpdateProfile(!updateProfile)} className="bg-neutral text-neutral-content rounded-full w-12">
                            <span>SY</span>
                        </div>
                    </div>
                    <div className="navbar-end w-fit">
                        <Link to='/register'><span className="btn bg-blue-500 text-white hover:bg-blue-400">Registration</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;