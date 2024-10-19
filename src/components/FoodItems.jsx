import React from "react";
import FoodCard from "./FoodCard";
import { Toaster } from "react-hot-toast";

const FoodItems = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {/* Food items would be mapped here */}
        <FoodCard
          id=""
          name=""
          price=""
          desc=""
          rating=""
          img=""
          handleToast={() => {}}
        />
      </div>
    </>
  );
};

export default FoodItems;
