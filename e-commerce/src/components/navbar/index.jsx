import { useNavigate } from "react-router-dom"
export const Navbar = () => {
    const naviagte = useNavigate();
    return (
        <>
            <header className="flex bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
                <div className="mr-auto flex gap-2">
                    <span class="material-symbols-outlined text-4xl p-2 ml-5">
                        shopping_bag_speed
                    </span>
                </div>
                <nav className="ml-auto flex items-center gap-2">
                    <span class="material-symbols-outlined  text-2xl p-2 hover:cursor-pointer">
                        <div onClick={()=> naviagte('/cart')}>shopping_cart</div>
                    </span>
                    <span class="material-symbols-outlined text-2xl p-2 hover:cursor-pointer">
                        login
                    </span>
                    <span class="material-symbols-outlined text-2xl p-2 hover:cursor-pointer">
                        favorite
                    </span>
                </nav>
            </header>
        </>
    )
}