import { ProductApiCall } from "../../api/productApiCall"
import { Navbar } from "../../components/navbar"
import { useEffect, useState } from "react"
import RecipeReviewCard from "../../components/productCard";

export const Home = () => {
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        (async () => {
            const data = await ProductApiCall();
            setProducts(data);

        })();
    }, []);
    return (
        <>
            <Navbar />
            <main className="flex flex-wrap gap-6 justify-center mt-4">
                {products
                    ?.filter(
                        (product) =>
                            product?.title &&
                            product?.price &&
                            Array.isArray(product?.images) &&
                            product.images.length > 0
                    )
                    .map((product) => (
                        <RecipeReviewCard key={product.id} product={product} />
                    ))}
            </main>

        </>
    )
}