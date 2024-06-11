import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/slice/cartSlice";

interface Product {
  id: number;
  img: string;
  title: string;
  category: string;
  price: string;
}

const ProductCart = ({ id, img, title, category, price }: Product) => {
  const dispatch = useAppDispatch();

  function addProductToCart() {
    const payload = {
      id,
      img,
      title,
      price: parseFloat(price),
      quantity: 1,
    };
    dispatch(addToCart(payload));
  }

  return (
    <div className="border border-gray-200">
      <p className="absolute text-white ml-2">{id}</p>
      <div className="text-center border-b border-gray-200">
        <img src={img} alt="id" className="inline-block" />
      </div>
      <div className="px-8 py-4">
        <div className="flex justify-center items-center gap-x-32">
          <p className="text-gray-500 text-sm font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>
        </div>
        <div className="mt-3 flex items-center justify-between text-[#ffb21d] w-full">
          <div className="flex items-center">
            <div className="flex -ml-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-gray-600 text-sm">(3 review)</p>
            <div className="ml-20">
              <h2 className="font-medium text-primary text-xl">R${price}</h2>
            </div>
          </div>
        </div>
        <div
          onClick={addProductToCart}
          className="flex gap-x-3 w-full justify-center rounded-lg items-center bg-primary text-white mt-2 px-4 py-2 cursor-pointer hover:bg-primaryHover"
        >
          <AiOutlineShoppingCart className="text-2xl" /> Add To Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
