import { ProductApiCall } from "../../api/productApiCall"
import { Navbar } from "../../components/navbar"
import { useEffect } from "react"
import  RecipeReviewCard  from "../../components/productCard";

export const Home = () => {
    useEffect(() => {
        ProductApiCall();
    }, []);
    return (
        <>
            <Navbar />
            <RecipeReviewCard />

        </>
    )
}