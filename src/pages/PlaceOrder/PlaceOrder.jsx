import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../components/context/StoreContext";


const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <div>
        <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-ight"></div>
        <dive className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detals">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detals"></div>
            <p>Delevery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            <hr />
            <div className="cart-total-detals"></div>
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </dive>
      </div>
    </form>
  );
};

export default PlaceOrder;
