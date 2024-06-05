import React, { useState } from "react";
import { Heading } from "./Components/Heading";
import { Testimonials } from "./Components/Testimonials";
import reviews from "./data";

const App = () => {
  let [currentIndex, setCurrentIndex] = useState(0);

  function selectLeftData() {
    const newIndex = currentIndex <= 0 ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function selectRightData() {
    const newIndex = currentIndex >= reviews.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function selectRandomData() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setCurrentIndex([randomIndex]);
  }

  return (
    <div className="flex flex-col justify-center items-center  h-[100vh] w-[100vw] bg-slate-300	">
      <Heading></Heading>
      <Testimonials
        data={reviews[currentIndex]}
        selectLeftData={selectLeftData}
        selectRightData={selectRightData}
        selectRandomData={selectRandomData}
      ></Testimonials>
    </div>
  );
};

export default App;
