import { Route, Routes } from "react-router-dom";
import { Home } from "./frontend/pages/homepage/index.jsx";
import { CartCheckout } from "./frontend/pages/cart/index.jsx";
import { Login } from "./frontend/pages/login/index.jsx";
import Signup from "./frontend/pages/signup/index.jsx";

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
