import { useSelector } from "react-redux";
import { useState, type ChangeEvent, type FormEvent } from "react";
import "./CheckoutPage.css";
import type { RootState } from "../redux/store";

const CheckoutPage = () => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    alert("🎉 Order Submitted Successfully! (Demo Mode)");
    console.log("Order Data =>", { formData, items, totalPrice });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-grid">
        
        {/* Shipping Form */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h3>Shipping Information</h3>

          {Object.entries(formData).map(([key, value]) => (
            <input
              key={key}
              type="text"
              name={key}
              value={value}
              placeholder={key.replace(/([A-Z])/g, " $1")}
              onChange={handleChange}
              required
            />
          ))}

          <button type="submit" className="place-order-btn">
            Proceed to payment ✔
          </button>
        </form>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Your Order Summary</h3>

          <div className="items-list">
            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.img} alt={item.title} className="summary-img" />
                <div className="summary-info">
                  <p>{item.title}</p>
                  <span>Qty: {item.quantity}</span>
                </div>
                <strong>${item.totalPrice}</strong>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <p>Total Items: {totalQuantity}</p>
            <p className="grand-total">Total: ${totalPrice}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
