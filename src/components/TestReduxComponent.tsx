import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart, removeProduct } from "../redux/slice/cartSlice";

const TestReduxComponent = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const testAddProduct = () => {
    const product = {
      id: 1,
      title: "Sample Product",
      img: "sample.jpg",
      price: 100,
      quantity: 1,
    };
    dispatch(addToCart(product));
  };

  const testRemoveProduct = () => {
    dispatch(removeProduct(1));
  };

  console.log("Current cart state:", cart);

  return (
    <div className="flex items-center flex-col justify-center gap-4 font-bold text-2xl uppercase text-white mt-12 mb-8">
      <h1 className="text-primary">Redux Test</h1>
      <div className="flex flex-row gap-4">
        <button
          className="bg-primary rounded-xl p-4 hover:bg-white hover:text-primary transition-all duration-200"
          onClick={testAddProduct}
        >
          Add Product
        </button>
        <button
          className="bg-primary rounded-xl p-4 hover:bg-white hover:text-primary transition-all duration-200"
          onClick={testRemoveProduct}
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default TestReduxComponent;
