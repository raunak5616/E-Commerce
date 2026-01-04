import "./index.css";
import { useCart } from "../../context/card-context";

export const CartCard = ({ item }) => {

  const {cartDispatch } = useCart();

  const countInc = () => {
    cartDispatch({
      type: "INCREMENT_QTY",
      payload: item.id
    })
  };
  const countdec = () => {
    cartDispatch({
      type: "DECREMENT_QTY",
      payload: item.id
    })
  };

  return (
    <div className="container1">
      <div className="product">
        <div className="media">
          <img src={item?.images[0]} alt={item?.title} />
        </div>
        <div className="des">
          <h4>{item?.title}</h4>
          <div className="slug">{item?.slug}</div>
          <div className="actions">
            <span>❤️</span>
            <span>❌</span>
          </div>
        </div>
        <div className="qty">
          <span className="price">₹{(item?.price) * 80}</span>
          <div className="qty-controls">
            <button className="qty-btn" onClick={() =>countdec(item)} disabled={item.qty === 1}
             >−</button>
            <span className="qty-count">
              {item?.qty}
            </span>
            <button className="qty-btn" onClick={() =>countInc(item) } disabled={item.qty === 5}
             >+</button>
             
          </div>
          {item.qty === 5 && (
            <p className="limit-text">Maximum quantity reached</p>
          )}
        </div>
      </div>
    </div>


  );
};
