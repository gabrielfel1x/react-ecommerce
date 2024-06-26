import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "../redux/hooks";
import React from "react";
import { CartProps } from "../types";

const Navbar: React.FC<CartProps> = ({ setOpenCart }) => {
  const count = useAppSelector((store) => store.cart.length);

  return (
    <div className="pt-4 bg-white top-0 sticky font-primary">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className=" text-4xl font-extrabold text-primary cursor-pointer">
            Tiavê
          </h1>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex items-center gap-6 hidden">
              <div
                onClick={() => {
                  setOpenCart(true);
                }}
                className="text-primary text-3xl relative cursor-pointer"
              >
                <FiShoppingCart />
                <div className="absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full text-white text-sm flex items-center justify-center">
                  {count}
                </div>
              </div>
              <div className="rounded-full border-2 border-gray-300 text-primary text-3xl w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transision-all duration-200">
                <AiOutlineUser />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 pt-4"></div>
    </div>
  );
};

export default Navbar;
