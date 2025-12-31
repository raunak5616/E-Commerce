import { ProductApiCall } from "../../api/productApiCall"
import { Navbar } from "../../components/navbar"
import { useEffect, useState } from "react"
import RecipeReviewCard from "../../components/productCard";
import { useCart } from "../../context/card-context";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const {cart,favorite} = useCart();
    console.log("cart items:",cart);
    console.log("favorite items:",favorite);

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
                        <div
                            key={product.id}
                            className="flex"          
                            style={{ width: "345px" }} 
                        >
                            <RecipeReviewCard product={product} />
                        </div>
                    ))}
            </main>

        </>
    )
}