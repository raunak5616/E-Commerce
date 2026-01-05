import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/homepage";
import { CartCheckout } from "./pages/cart";
import { Login } from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartCheckout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
