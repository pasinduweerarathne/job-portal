import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavbarToggler = () => {
        setIsNavOpen(!isNavOpen)
    }

    const navItem = [
        { path: "/", title: "Start a search" },
        { path: "/my-jobs", title: "My Jobs" },
        { path: "/salary", title: "Salary Extimates" },
        { path: "/job-create", title: "Post a Job" },
    ]

    return (
        <header className="max-w-screen-xl container mx-auto xl:px-24 px-4 shadow-md">
            <nav className="flex justify-between items-center py-6">
                <Link to="/" className="flex items-center text-2xl text-black font-bold">Job Portal</Link>

                {/* nav items for large devices */}
                <ul className="hidden md:flex gap-12">
                    {navItem.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* signup and login button */}
                <div className="text-base text-primary font-medium hidden lg:block space-x-2">
                    <Link to="/login" className="py-2 px-5 border rounded transition-all duration-300 hover:border-blueColor hover:bg-blueColor hover:text-white">Login</Link>
                    <Link to="/sign-up" className="py-2 px-5 bg-blueColor border border-blueColor rounded text-white">Sign Up</Link>
                </div>

                {/* nav items for smaller devices */}
                <div className="md:hidden block">
                    <button onClick={handleNavbarToggler}>
                        {!isNavOpen ? <FaBarsStaggered className="w-5 h-5 text-primary" /> : <FaXmark className="w-5 h-5 text-primary" />}
                    </button>
                </div>
            </nav>

            {/* nav items for mobile */}
            <nav className={`px-4 py-5 bg-primary rounded-sm md:hidden ${isNavOpen ? "block" : "hidden"}`}>
                <ul className="">
                    {navItem.map(({ path, title }) => (
                        <li key={path} className="text-base text-center">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active text-xl" : "text-white text-xl"}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                    <div className="flex flex-col items-center gap-2 mt-1">
                        <Link to="/login" className="text-primary text-xl w-fit py-1 px-3 transition-all duration-300 bg-white rounded hover:bg-blueColor hover:text-white">Login</Link>
                        <Link to="/sign-up" className="text-white text-xl bg-blueColor w-fit py-1 px-3 transition-all duration-300 rounded">Sign Up</Link>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar