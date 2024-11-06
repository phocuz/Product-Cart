import { useState } from "react"
import menu from "./assets/icon-menu.svg"
import cart from "./assets/icon-cart.svg"
import image from "./assets/image-avatar.png"
import close from "./assets/icon-close.svg"
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleToggle() {
        setIsOpen(!isOpen);
    }
    
    return (
        <header className="relative flex items-center justify-between px-4 py-6 md:px-8 lg:px-16 border-b border-gray-200">
            {/* Left section with logo and navigation */}
            <div className="flex items-center gap-8">
                {/* Mobile menu button */}
                <button 
                    onClick={handleToggle}
                    className="md:hidden"
                >
                    <img 
                        src={isOpen ? close : menu} 
                        alt="menu"
                        className="w-6 h-6 transition-opacity duration-300" 
                    />
                </button>

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wider">SNEAKERS</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-gray-600">
                        <li className="hover:text-gray-900 pb-2 hover:border-b border-gray-400 cursor-pointer transition-colors">
                            Collections
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                            Men
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                            Women
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                            About
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                            Contact
                        </li>
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-64 h-screen bg-white shadow-lg md:hidden z-50">
                        <ul className="p-6 space-y-6 text-lg font-medium">
                            <li className="hover:text-gray-600 cursor-pointer">
                                Collections
                            </li>
                            <li className="hover:text-gray-600 cursor-pointer">
                                Men
                            </li>
                            <li className="hover:text-gray-600 cursor-pointer">
                                Women
                            </li>
                            <li className="hover:text-gray-600 cursor-pointer">
                                About
                            </li>
                            <li className="hover:text-gray-600 cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Right section with cart and profile */}
            <div className="flex items-center gap-6">
                <button className="relative hover:opacity-75 transition-opacity">
                    <img src={cart} alt="cart-icon" className="w-6 h-6" />
                </button>
                <button className="hover:opacity-75 transition-opacity">
                    <img 
                        src={image} 
                        alt="profile avatar" 
                        className="w-10 h-10 rounded-full border-2 border-transparent hover:border-orange-500 transition-colors" 
                    />
                </button>
            </div>
        </header>
    )
}

export default Header