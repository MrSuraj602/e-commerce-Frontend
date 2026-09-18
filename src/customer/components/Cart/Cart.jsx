import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, cartItems = [], loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  if (loading && cartItems.length === 0) {
    return <div className="px-5 py-10 text-center text-gray-600">Loading cart...</div>;
  }

  if (!cartItems.length) {
    return <div className="px-5 py-10 text-center text-gray-600">Your cart is empty.</div>;
  }

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id || item.product?.id || item.size} item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mb-10">
          <div className="border m-6">
            <p className="uppercase font-bold opacity-60 pb-4 ml-2 mt-2">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold m-2">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart?.totalPrice?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart?.discounte?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cart?.totalDiscountedPrice?.toLocaleString()}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckOut}
              className="w-full mt-5"
              variant="contained"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
