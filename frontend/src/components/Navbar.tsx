import { RabbitIcon } from "lucide-react"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 
        sm:py-4 dark:shadow-gray-900 dark:shadow-lg shadow-gray-200 shadow-lg ">
            <Link to="/">
                <div className="flex items-center gap-2 sm:gap-3">
                    <RabbitIcon className="size-7 cursor-pointer sm:size-8 md:size-9 dark:text-blue-800 text-gray-800 border
                 border-gray-400 dark:border-blue-800 dark:bg-black bg-white rounded-full p-1"/>
                    <button className="text-xl cursor-pointer sm:text-2xl font-bold text-gray-700 dark:text-white">Huddle</button>
                </div>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4 rounded-full border-2 border-gray-400 p-1 dark:border-blue-500">
                {/* Add nav items here if needed */}
                <AnimatedThemeToggler />
            </div>
        </nav>
    )
}

export default Navbar