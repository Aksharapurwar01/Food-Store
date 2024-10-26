import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FoodData from "../data/FoodData.js";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const food = FoodData.find((item) => item.id === parseInt(id));

  if (!food) {
    return <p className="text-center">Food item not found</p>;
  }

  return (<>
    <button
    onClick={() => navigate(-1)}
    className="bg-blue-500 text-white py-2 px-4 ml-2 mt-2 rounded-lg mb-4 hover:bg-blue-600"
  >
    Back
  </button>
    <div className="max-w-sm mx-auto  mt-10 bg-white  rounded-lg h-sm">
     
      <img src={food.img} alt={food.name} className="w-full h-60 object-cover rounded-t-lg" />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{food.name}</h1>
        <p className="text-gray-600 mb-4">{food.desc}</p>
        <p className="text-gray-700 font-semibold">Price: ₹{food.price}</p>
        <p className="text-yellow-500">Rating: {food.rating}</p>
      </div>
    </div>
    </>
  );
};

export default FoodDetails;

