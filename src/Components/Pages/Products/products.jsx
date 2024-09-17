import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../features/products/productsSlice";
import Product from "./Product";
import Spinner from "../Home/Spinner";

const Products = () => {

    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.productsR)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <div>
                <h1 className="text-center mt-5 text-3xl">All Products</h1>
            </div>

            <div>
                {isLoading && <Spinner></Spinner>}
                {error && <div className="text-center text-red-500">Error loading products</div>}
            </div>

            <div>
                <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        !isLoading && !error && products && products.length > 0 && products.map((product) => <Product key={product.id} products={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;
