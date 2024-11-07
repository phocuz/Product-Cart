import image from "./assets/image-product-1-thumbnail.jpg";
import trash from "./assets/icon-close.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

function CartItem() {

    const cartItems = useSelector((state) => state.cart.cart);

    const dispatcher = useDispatch();

    function handleDeleteCart(){
        dispatcher(removeFromCart(index))
    }
  const defaultItem = {
    image,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    quantity: 3,
  };
  
const currentItem = cartItems && cartItems.length > 0 ? cartItems[0] : defaultItem;

  // Calculate total price
  const calculateTotalPrice = (price, quantity) => (price * quantity).toFixed(2);

  return (
    <div className="absolute top-20 right-0 shadow-lg w-80 p-4 bg-white z-10 border border-gray-200 rounded-lg">
      <h1 className="text-start w-full pb-4 mb-4 border-b text-xl font-bold text-gray-800">
        Cart
      </h1>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img src={defaultItem.image} alt={`${defaultItem.name} thumbnail`} className="w-16 h-14 rounded" />
          
          <div className="flex-1">
            <p className="text-gray-700 font-semibold">{currentItem.name}</p>
            <div className="text-gray-500">
              <span>${currentItem.price.toFixed(2)} × {currentItem.quantity}</span> 
              <span className="font-bold text-gray-800 ml-2">${calculateTotalPrice(currentItem.price, currentItem.quantity)}</span>
            </div>
          </div>

          <button className="p-1 hover:bg-gray-100 rounded" aria-label="Remove item" onClick={handleDeleteCart}>
            <img src={trash} alt="Remove item icon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <button className="bg-orange-500 w-full py-3 mt-6 text-white font-semibold text-lg rounded-lg hover:bg-orange-600">
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
