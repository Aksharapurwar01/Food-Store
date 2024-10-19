import React, { useEffect, useState } from "react";



const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);


  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
         
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;