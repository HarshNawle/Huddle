import { RabbitIcon, Github, Twitter, Linkedin, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const FooterSection = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <RabbitIcon className="size-8 dark:text-blue-800 text-gray-800 border border-gray-400 dark:border-blue-800 dark:bg-black bg-white rounded-full p-1" />
                            <span className="text-xl font-bold text-gray-800 dark:text-white">Huddle</span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                            More than just a chat app. Connect, collaborate, and communicate in real-time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                            >
                                <Github className="size-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                            >
                                <Twitter className="size-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                            >
                                <Linkedin className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {currentYear} Huddle. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            Made with <Heart className="size-4 text-red-500 fill-red-500" /> by 
                            <a href="https://github.com/HarshNawle" className="text-gray-600 dark:text-blue-400"> Harsh Nawle</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection