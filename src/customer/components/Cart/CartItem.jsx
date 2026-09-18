import { Button, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

const CartItem = ({ item }) => {
  const product = item?.product || {};
  const quantity = item?.quantity || 1;
  const price = item?.discountedPrice ?? item?.price ?? 0;

  return (
    <div className="p-5 shadow-lg border rounded-md m-3">
      <div className="flex items-center ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={product.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2qVZCCOi2Y74Hi3lDx02l0gGxjM2FJqciL-FYn6Q9Q&s=10"}
            alt={product.title || "Product image"}
          />
        </div>

        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">{product.title || "Product Name"}</p>
          <p className="opacity-70">₹{Number(price).toLocaleString()}</p>
          <p className="opacity-70 mt-2">Size: {item?.size || "N/A"}</p>
          <p className="opacity-70 mt-2">Seller: {product.brand || "N/A"}</p>
          <div className="flex space-x-2 items-center text-gray-900 pt-5">
            <p className="font-semibold">₹{Number(product.discountedPrice || price).toLocaleString()}</p>
            <p className="opacity-50 line-through">₹{Number(product.price || price).toLocaleString()}</p>
            <p className="text-green-600 font-semibold">{product.discountPercent || 0}% OFF</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <RemoveCircleIcon />
          </IconButton>
          <span className="py-1 px-7 rounded-sm">{quantity}</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleIcon />
          </IconButton>
        </div>

        <div>
          <Button sx={{ color: "RGB(245 85 53)" }}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
