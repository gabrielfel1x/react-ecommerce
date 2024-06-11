import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpeg";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 1,
    img: image1,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 2,
    img: image2,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 3,
    img: image3,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 4,
    img: image4,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 5,
    img: image5,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 6,
    img: image6,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 7,
    img: image7,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
  {
    id: 8,
    img: image8,
    title: "Product",
    category: "Jewelry Product",
    price: "110.00",
  },
];

const Product = () => {
  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl sm:mt-0">
          <div className="text-black">New </div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
