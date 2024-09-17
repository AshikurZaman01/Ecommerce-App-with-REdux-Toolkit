import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-40">
            <motion.div
                className="relative flex items-center justify-center h-16 w-16"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1.5,
                }}
            >
                <div className="absolute h-full w-full border-4 border-transparent border-t-red-500 border-r-blue-500 border-b-green-500 border-l-yellow-500 rounded-full"></div>
                <div className="absolute h-full w-full border-4 border-transparent border-t-yellow-500 border-r-red-500 border-b-blue-500 border-l-green-500 rounded-full animate-spin"></div>
            </motion.div>
        </div>
    );
}

export default Spinner;
