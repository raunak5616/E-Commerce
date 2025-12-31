import { createContext,useContext,useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";

const cartContext = createContext();

const CartProvider = ({children}) =>{
    const initialState ={
        cart : [],
        favorite:[],
    }
    const [{cart,favorite},cartDispatch] = useReducer(cartReducer,initialState);
    return(
        <cartContext.Provider value={{cart,favorite,cartDispatch}}>
            {children}
        </cartContext.Provider>
    )
}
const useCart = () => useContext(cartContext);
export {CartProvider,useCart};