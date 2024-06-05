import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Testimonials = (props) => {
  const { data, selectLeftData, selectRightData, selectRandomData } = props;

  return (
    <div className="max-w-[700px] mx-auto bg-white rounded-md shadow-lg p-8">
      <div className="relative flex justify-center">
        <img
          src={data.image}
          alt={data.name}
          className="h-24 w-24 rounded-full border-4 border-fuchsia-600 absolute -left-2 top-[-10px]"
        />
      </div>
      <div className="text-center my-4">
        <p className="text-3xl font-bold">{data.name}</p>
        <p className="text-2xl text-fuchsia-600">{data.job}</p>
      </div>
      <div className="text-center">
        <p className="text-fuchsia-600 text-2xl">“</p>
        <p className="text-lg">{data.text}</p>
        <p className="text-fuchsia-600 text-2xl">”</p>
      </div>
      <div className="flex justify-center gap-5 mt-6">
        <FaChevronLeft
          onClick={selectLeftData}
          className="cursor-pointer text-fuchsia-600 text-3xl"
        />
        <FaChevronRight
          onClick={selectRightData}
          className="cursor-pointer text-fuchsia-600 text-3xl"
        />
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={selectRandomData}
          className="bg-fuchsia-600 py-4 px-6 text-white font-semibold text-lg rounded-lg hover:bg-fuchsia-700"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};
