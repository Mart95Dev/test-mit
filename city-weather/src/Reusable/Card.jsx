import React from "react";
import { translateDay } from "../components/Slide/helper";

/**
 *
 * Display card on map onload
 *
 */

function Card({ cityName, image, days }) {
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
              <span className="text-md bg-white text-blue-500 rounded px-1">
                {days[0].day.avgtemp_c}°
              </span>
              <span className="capitalize pl-1">
                {translateDay(days[0].date)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-2 border-t text-gray-100 border-gray-700">
        <div className="flex flex-col items-center">
          <span className="capitalize text-md">
            {translateDay(days[1].date)}
          </span>
          <span className="text-md pl-1">{days[1].day.avgtemp_c}°</span>
        </div>
        <div className="flex flex-col items-center space-x-1">
          <span className="capitalize text-md pl-1">
            {translateDay(days[2].date)}
          </span>
          <span className="text-md">{days[2].day.avgtemp_c}°</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
