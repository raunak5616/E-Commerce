import { ProductApiCall, CategoriesApiCall } from "../../api/productApiCall"
import { Navbar } from "../../components/navbar/index.jsx"
import { useEffect, useState } from "react"
import RecipeReviewCard from "../../components/productCard";
import { useCart } from "../../context/card-context";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [categoriesProduct, setcategoriesProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const { cart, favorite } = useCart();
    console.log("cart items:", cart);
    console.log("favorite items:", favorite);

    useEffect(() => {
        (async () => {
            const product = await ProductApiCall();
            const productsWithCategory = await CategoriesApiCall();
            setcategoriesProduct(product);
            setProducts(product);
            setCategories(productsWithCategory);
        })();
    }, []);
    const onCategoryClick = (categoryName) => {
        const filteredproducts = products?.length > 0 && products.filter((product)=> product.category.name.toLowerCase()=== categoryName.toLowerCase());
        setcategoriesProduct(filteredproducts);
    };
    return (
        <>
            <Navbar />
                <main className="flex flex-wrap gap-3 justify-center my-4">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-medium hover:bg-indigo-500 transition-all duration-300 shadow-sm"
                onClick={()=>setcategoriesProduct(products)}>All</button>
                {categories?.length > 0 &&
                    categories.map((item) => (
                        <button
                            key={item.id}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-medium hover:bg-indigo-500 transition-all duration-300 shadow-sm"
                            onClick={()=>onCategoryClick(item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
            </main>
            <main className="flex flex-wrap gap-6 justify-center mt-4">
                {categoriesProduct
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