import React from "react";
import './HomeSectionCard.css';

const HomeSectionCard = ({ data }) => {
  return (
    <div className="homeSectionCard cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] h-[20rem] mx-3l m-5">
      <div className="h-[13rem] w-[12rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{data.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {data.title.slice(0, 50) + "..."}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
