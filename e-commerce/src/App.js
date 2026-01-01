import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/homepage";
import { CartCheckout } from "./pages/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartCheckout />} />
    </Routes>
  );
}

export default App;
