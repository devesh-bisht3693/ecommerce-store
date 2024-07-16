import { IconButton } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleMinus = () => {
    if (count === 1)
        return;

    setCount(count - 1);
  }

  return (
    <div className="my-10 mx-40 p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/f/z/y/l-aa-00153-yellow-aayu-original-imagz848vwz3hsgm.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 text-left">
          <p className="font-semibold">Women A-line Yellow Dress</p>
          <p className="opacity-70">Size: L, Yellow</p>
          <p className="opacity-70 mt-2">Seller: Aayu</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹499</p>
            <p className="opacity-50 line-through">₹1999</p>
            <p className="text-green-600 font-semibold">75% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center justify-between lg: space-x-10 pt-4">
        <div className="flex items-center space-x-2">
            <IconButton onClick={() => handleMinus()}>
                <RemoveCircleOutlineIcon className={`${count !== 1 ? 'text-[#db624d]' : 'text-gray-500'}`} />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{count}</span>
            <IconButton onClick={() => handleAdd()}>
                <AddCircleOutlineIcon sx={{color: "#37bf4c"}}/>
            </IconButton>
        </div>
            <IconButton>
                <DeleteIcon sx={{color: "#800808"}}/>
            </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
