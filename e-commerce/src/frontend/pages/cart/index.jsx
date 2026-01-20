import axios from "axios";
import { CartCard } from "../../components/cartCard/index.jsx";
import { Navbar } from "../../components/navbar/index.jsx";
import { useCart } from "../../context/card-context.js";

export const CartCheckout = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
   const handlePayment = async () => {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/create-order`,
      { amount: subtotal * 80 },
      { headers: { "Content-Type": "application/json" } }
    );

    const order = res.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "My E-Commerce",
      description: "Order Payment",
      order_id: order.id,

      handler: async function (response) {
        const verifyRes = await axios.post(
          `${process.env.REACT_APP_API_URL}/verify-payment`,
          response,
          { headers: { "Content-Type": "application/json" } }
        );

        if (verifyRes.data.success) {
          alert("Payment Successful ✅");
        } else {
          alert("Payment Failed ❌");
        }
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong");
  }
};

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-left">
          <h2 className="section-title">Your Cart</h2>
          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartCard key={item.id} item={item} />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
        <div className="cart-right">
          <h2 className="section-title">Order Summary</h2>
          <div className="summary-card">
            {cart.map((item) => (
              <div className="summary-row" key={item.id}>
                <span>
                  ({item.title} × {item.qty})
                </span>
                <span>₹{(item.price * item.qty)*80}</span>
              </div>
            ))}
            <hr />
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{(subtotal)*80}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="green">FREE</span>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <span className="green">− ₹0</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{(subtotal)*80}</span>
            </div>
            <button className="pay-btn" onClick={handlePayment}>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};
