import React from 'react'

const OrderSummaryItem = () => {
    return (
      <div className="my-10 p-5 shadow-lg border rounded-md">
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
      </div>
    );
}

export default OrderSummaryItem