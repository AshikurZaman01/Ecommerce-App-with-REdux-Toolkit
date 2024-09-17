import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../features/products/productsSlice';
import { motion } from 'framer-motion';

const Product = ({ products }) => {

    const dispatch = useDispatch();
    const [isDeleted, setIsDeleted] = useState(false);

    const { images, title, price } = products || {};

    const handleDelete = () => {
        setIsDeleted(true); // Start the deletion animation
        setTimeout(() => {
            dispatch(deleteProduct(products.id)); // Dispatch delete after animation
        }, 500); // Delay for the animation (500ms)
    };

    useEffect(() => {
        if (isDeleted) {
            // Additional cleanup actions can be performed here if needed
        }
    }, [isDeleted]);

    return (
        <motion.div
            className="w-full max-w-xs mx-auto"
            layout // This enables the layout animation
            initial={{ opacity: 1, scale: 1 }}
            animate={isDeleted ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md h-96 flex flex-col">
                <div className="overflow-hidden">
                    <img
                        src={images[0]}
                        alt={title}
                        className="h-56 w-full object-contain transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
                <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xl font-bold text-gray-900">${price}</span>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                            Add to Cart
                        </button>
                    </div>

                    <div className='mt-4 flex justify-around items-center'>
                        {/* Delete Button */}
                        <button
                            onClick={handleDelete}
                            className='relative bg-gradient-to-br from-red-500 to-red-700 text-white py-2 px-4 rounded-lg shadow-xl transform transition-transform duration-200 hover:scale-105 active:scale-95'
                        >
                            <span className='relative z-10'>Delete</span>
                            <span className='absolute inset-0 bg-red-800 rounded-lg transform scale-105 -z-10'></span>
                        </button>

                        {/* Update Button */}
                        <button className='relative bg-gradient-to-br from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg shadow-xl transform transition-transform duration-200 hover:scale-105 active:scale-95'>
                            <span className='relative z-10'>Update</span>
                            <span className='absolute inset-0 bg-blue-800 rounded-lg transform scale-105 -z-10'></span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Product;
