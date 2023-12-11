

const NavBar = () => {
    const navLinks = 
    <>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>My Skill</a></li>
    <li><a>Projcets</a></li>
    <li><a>Contact</a></li>
    </> 
    return (
        <div className="container mx-auto">
            <div className="text-white navbar bg-blue-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">daisyUI</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
        </div>
    );
};

export default NavBar;