import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[15rem]">
        <img className="h-full w-full object-cover object-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className=" text-lg font-bold opacity-70">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex space-x-2 justify-center">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
