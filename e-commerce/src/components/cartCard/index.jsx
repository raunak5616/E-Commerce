import "./index.css";

export const CartCard = ({ item }) => {
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
          <span className="price">₹{item?.price}</span>
          <div className="qty-controls">
            <button className="qty-btn">−</button>
            <span className="qty-count">3</span>
            <button className="qty-btn">+</button>
          </div>
        </div>

      </div>
    </div>
  );
};
