import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Product from "./Product";

interface Product {
  id: number;
  img: string;
  title: string;
  category: string;
  price: string;
}

const ProductCart = ({ id, img, title, category, price }: Product) => {
  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200"></div>
    </div>
  );
};

export default ProductCart;
