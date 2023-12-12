import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/henry-removebg-preview.png"


const NavBar = () => {
    const navLinks = 
    <>
    <li><a href="/">Home</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#service">Service</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </> 
    return (
        <div className="container mx-auto">
            <div className="container fixed z-10 mx-auto bg-gray-50 text-sky-600 navbar bg-opacity-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-50 rounded-box w-52  bg-opacity-30">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} alt=""  className="w-[150px]"/>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 text-xl menu menu-horizontal">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="#"><FaGithub className="mr-3 text-4xl text-black"></FaGithub></a>
                <a href="#"><FaLinkedin className="text-4xl text-sky-600"></FaLinkedin></a>
            </div>
        </div>
        </div>
    );
};

export default NavBar;