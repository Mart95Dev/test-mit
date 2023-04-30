import React from "react";

function Card({ cityName, image }) {
  return (
    <div className="p-o m-0 w-full overflow-hidden rounded-lg shadow-lg bg-[#689df6] text-gray-100">
      <div className="flex items-end justify-end h-full bg-gray-500 bg-center bg-cover w-full relative">
        <img className="object-center" src={image} alt={cityName} />
        <p className="absolute px-2 py-1 text-sm tracking-widest text-gray-100 capitalize bg-gray-800 bg-opacity-75 rounded shadow-lg">
          {cityName}
        </p>
      </div>
      <div className="p-2">
        <div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-lg bg-white text-blue-500 rounded px-1">
                36°
              </span>
              <span className="capitalize">thursday</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-2 border-t text-gray-100 border-gray-700">
        <div className="flex flex-col items-center space-x-1">
          <span className="capitalize text-md">friday</span>
          <span className="text-md">15°</span>
        </div>
        <div className="flex flex-col items-center space-x-1">
          <span className="capitalize text-md">saturday</span>
          <span className="text-md">18°</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
