import React from "react";
import useFetchData from "../hooks/useFetchData";
import Cart from "./Cart";

const LunchContainer = () => {
  const { menu, loading } = useFetchData("/0/lunch");
  console.log(menu);
  if (loading) return <p>Loading....</p>;
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-10 w-[90%] mx-auto py-4 ">
      {menu &&
        menu.map((menuItem) => (
          <Cart key={menuItem.title} breackfastMenu={menuItem} />
        ))}
    </div>
  );
};

export default LunchContainer;
