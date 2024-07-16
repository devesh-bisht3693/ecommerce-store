import React from 'react'
import AddressCard from './../Cards/AddressCard';
import OrderSummaryItem from './OrderSummaryItem';

const OrderSummary = () => {
  return (
    <div className='text-left'>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>
      <div className="lg:grid grid-cols-3 relative">
      <div className="col-span-2">
        {[1,1,1].map((item) => <OrderSummaryItem />)}
      </div>
      <div className="pl-5 mt-10 sticky top-0 h-[100vh]">
        <div className="border shadow-lg p-5">
          <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
          <hr />

          <div className=" space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>₹4697</span>
            </div>
          </div>
          <div className=" space-y-3 font-semibold">
            <div className="flex justify-between pt-3">
              <span>Discount</span>
              <span className="text-red-600">-₹3419</span>
            </div>
          </div>
          <div className="space-y-3 font-semibold mb-5">
            <div className="flex justify-between pt-3">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
          </div>
          <hr />
          <div className=" space-y-3 font-semibold mb-10">
            <div className="flex justify-between pt-3 font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-600">₹1278</span>
            </div>
          </div>
         
            <button
              type="submit"
              className="w-full mt-5 rounded-md border border-transparent bg-[#9155fd] px-5 py-3 text-base font-medium text-white hover:bg-violet-600"
            >
              Payment
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OrderSummary