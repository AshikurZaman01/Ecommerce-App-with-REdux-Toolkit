import React from 'react';

const Product = ({ products }) => {
    console.log(products);

    const { images, title, price } = products || {};

    return (
        <div className="w-full max-w-xs mx-auto">
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
                </div>
            </div>
        </div>
    );
}

export default Product;
