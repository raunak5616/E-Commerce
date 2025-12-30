export const Navbar = () => {
    return (
        <>
           <header className="flex">
             <div>
                shop it
            </div>
            <nav className="ml-auto flex gap-2">
                <span class="material-symbols-outlined p-2">
                    shopping_cart
                </span>
                <span class="material-symbols-outlined p-2">
                    login
                </span>
                <span class="material-symbols-outlined p-2">
                    favorite
                </span>
            </nav>
           </header>
        </>
    )
}