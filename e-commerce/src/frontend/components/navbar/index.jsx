import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-Context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropOpen, setIsAccountDropOpen] = useState(false);

  const { isAuthenticated, logout } = useAuth();

  const handleCart = () => {
    if (!isAuthenticated) {
      alert("Please login to access cart");
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };
  const handleLogout = () => {
    logout(); 
    setIsAccountDropOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
      <div className="mr-auto flex gap-2 hover:cursor-pointer" onClick={()=> navigate("/")}>
        <span className="material-symbols-outlined text-4xl p-2 ml-5">
          shopping_bag_speed
        </span>
      </div>
      <nav className="ml-auto flex items-center gap-2">
        <span
          className="material-symbols-outlined text-2xl p-2 hover:cursor-pointer"
          onClick={handleCart}
        >
          shopping_cart
        </span>

        <span
          onClick={() => setIsAccountDropOpen(!isAccountDropOpen)}
          className="material-symbols-outlined text-2xl p-2 hover:cursor-pointer"
        >
          account_circle
        </span>

        {isAccountDropOpen && (
          <div className="absolute top-14 right-4 bg-white text-black rounded shadow-md">
            {!isAuthenticated ? (
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => navigate("/login")}
              >
                Login
              </div>
            ) : (
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </div>
            )}
          </div>
        )}

        <span className="material-symbols-outlined text-2xl p-2 hover:cursor-pointer">
          favorite
        </span>
      </nav>
    </header>
  );
};
