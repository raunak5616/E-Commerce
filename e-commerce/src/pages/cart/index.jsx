import { CartCard } from "../../components/cartCard";
import { Navbar } from "../../components/navbar";
import { useCart } from "../../context/card-context";

export const CartCheckout = () => {
  const { cart } = useCart();

  return (
    <>
      <Navbar />

      <div className="cart-page">

        {/* LEFT SIDE */}
        <div className="cart-left">
          <h2 className="section-title">Your Cart</h2>

          <div className="cart-items">
            {cart?.length > 0 &&
              cart.map((item) => (
                <CartCard key={item.id} item={item} />
              ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-right">
          <h2 className="section-title">Order Summary</h2>

          <div className="summary-card">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹0000</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span className="green">FREE</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span className="green">− ₹000</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹0000</span>
            </div>

            <button className="pay-btn">Proceed to Payment</button>
          </div>
        </div>

      </div>
    </>
  );
};
