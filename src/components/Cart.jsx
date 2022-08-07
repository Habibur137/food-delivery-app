import React from "react";

const Cart = ({ breackfastMenu }) => {
  const { desc, title, image, price } = breackfastMenu;
  console.log(breackfastMenu);
  return (
    <div className="group rounded-md  mx-auto w-72 after:content-[''] after:bg-primary-300 after:rounded-full after:w-36 after:h-36 after:-top-[6%] overflow-hidden after:-right-[6%] after:absolute before:content-[''] before:bg-primary-300 before:rounded-full before:w-24 before:h-24 before:-bottom-[6%]  before:-left-[6%] before:absolute relative shadow-xl border hover:border-green-500 hover:after:scale-150  transiton-all after:duration-500 hover:before:scale-0 before:duration-500  bg-slate-200 h-96 duration-500 ease-in-out transform hover:scale-105 after:z-10">
      <div className="absolute text-black z-20 top-0 left-0 w-full h-full flex flex-col justify-between items-center">
        <img
          className="w-auto h-36 mt-6 transform translate-y-16 group-hover:translate-y-0 delay-200  transition-all duration-500"
          src={image}
          alt=""
        />
        <h1 className="text-xl group-hover:translate-y-0 delay-200  transform translate-y-16 transition-all duration-500 text-black mt-2">
          {title}
        </h1>
        <p className=" group-hover:translate-y-0 delay-200  transform translate-y-16 transition-all duration-500 text-black mt-2">
          {desc}
        </p>
        <div className="w-full h-full flex justify-around items-center transform translate-y-32 group-hover:translate-y-0 delay-200  transition-all duration-500">
          <div className="mt-12">
            <span>4.5</span>
            <span className="text-xl text-[gold]">&#9733;</span>
          </div>
          <p className="font-bold text-2xl mt-12">Price ${price}</p>
        </div>
        <div className="transform translate-y-32 group-hover:translate-y-0 transition-all duration-500 mb-4 flex delay-300  items-center gap-x-3">
          <button className="bg-primary-300 px-6 py-1 font-semibold text-white">
            Buy Now
          </button>
          <button className="bg-primary-300 px-4 py-1 font-semibold text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
