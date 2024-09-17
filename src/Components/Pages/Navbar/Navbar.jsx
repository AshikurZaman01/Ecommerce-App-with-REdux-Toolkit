import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Add Products", path: "/addProducts" },
        { id: 3, name: "All Products", path: "/allProducts" },
    ];

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const buttonVariants = {
        open: { rotate: 180, scale: 1.2 },
        closed: { rotate: 0, scale: 1 }
    };

    return (
        <motion.nav
            className="bg-gray-100 p-4 shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand Logo */}
                <motion.div
                    className="text-black text-2xl font-bold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                    <span className="cursor-pointer">Ecommerce</span>
                </motion.div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <motion.button
                        onClick={handleMenuClick}
                        variants={buttonVariants}
                        animate={isOpen ? "open" : "closed"}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="flex items-center justify-center"
                    >
                        {isOpen ? (
                            <HiX className="text-black w-8 h-8" />
                        ) : (
                            <HiMenu className="text-black w-8 h-8" />
                        )}
                    </motion.button>
                </div>

                {/* Navbar Links */}
                <motion.ul
                    className={`md:flex md:space-x-6 md:text-black font-medium absolute md:static left-0 w-full bg-gray-100 md:bg-transparent transition-transform duration-500 ease-in-out ${isOpen ? "top-16 opacity-100 scale-100" : "top-[-400px] opacity-0 scale-95"
                        }`}
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {routes.map((route) => (
                        <motion.li
                            key={route.id}
                            className="md:inline-block py-2 px-4"
                            whileHover={{ scale: 1.1, color: "#f9a8d4" }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <Link
                                to={route.path}
                                className="block md:inline-block text-black hover:text-pink-400 transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {route.name}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
