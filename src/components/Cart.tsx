import React from "react";
import { CartProps } from "../types";
import { useAppSelector } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";

const Cart: React.FC<CartProps> = ({ setOpenCart }) => {
  const products = useAppSelector((store) => store.cart);
  console.log(useAppSelector((store) => store.cart));

  return (
    <div className="fixed left-0 top-0 z-20 overflow-y-scroll bg-primary w-full min-h-screen">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          onClick={() => {
            setOpenCart(false);
          }}
          className="absolute right-0 top-0 m-6 text-2xl cursor-pointer"
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>
      </div>
    </div>
  );
};

export default Cart;
