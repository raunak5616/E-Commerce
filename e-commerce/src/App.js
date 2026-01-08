import { Route, Routes } from "react-router-dom";
import { Home } from "./frontend/pages/homepage";
import { CartCheckout } from "./frontend/pages/cart";
import { Login } from "./frontend/pages/login";
import Signup from "./frontend/pages/signup";

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
