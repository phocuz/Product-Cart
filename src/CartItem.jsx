import image from "./assets/image-product-1-thumbnail.jpg";
import trash from "./assets/icon-close.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart?.cart ?? []);
  const dispatch = useDispatch();

  const defaultItem = {
    image,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    quantity: 3,
  };

  const handleRemoveItem = () => {
  try {
    dispatch(removeFromCart(cartItems.id));
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};


  // Calculate total price
  const calculateTotalPrice = (price, quantity) => (price * quantity).toFixed(2);

  // Calculate total price for all items
  const calculateCartTotal = () => {
    if (!cartItems || cartItems.length === 0) {
      return calculateTotalPrice(defaultItem.price, defaultItem.quantity);
    }
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <div className="absolute top-20 right-0 shadow-lg w-80 p-4 bg-white z-10 border border-gray-200 rounded-lg">
      <h1 className="text-start w-full pb-4 mb-4 border-b text-xl font-bold text-gray-800">
        Cart
      </h1>

      <div className="flex flex-col gap-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img 
                src={image} 
                alt={`${item.name} thumbnail`} 
                className="w-16 h-14 rounded" 
              />
              
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">{item.name}</p>
                <div className="text-gray-500">
                  <span>${item.price.toFixed(2)} × {item.quantity}</span> 
                  <span className="font-bold text-gray-800 ml-2">
                    ${calculateTotalPrice(item.price, item.quantity)}
                  </span>
                </div>
              </div>

              <button 
                className="p-1 hover:bg-gray-100 rounded" 
                aria-label="Remove item"
                onClick={handleRemoveItem}
              >
                <img src={trash} alt="Remove item icon" className="w-5 h-5" />

               
              </button>
            </div>
          ))
        ) : (
          <div className="flex items-center gap-4">
            <img 
              src={defaultItem.image} 
              alt={`${defaultItem.name} thumbnail`} 
              className="w-16 h-14 rounded" 
            />
            
            <div className="flex-1">
              <p className="text-gray-700 font-semibold">{defaultItem.name}</p>
              <div className="text-gray-500">
                <span>${defaultItem.price.toFixed(2)} × {defaultItem.quantity}</span> 
                <span className="font-bold text-gray-800 ml-2">
                  ${calculateTotalPrice(defaultItem.price, defaultItem.quantity)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="bg-orange-500 w-full py-3 mt-6 text-white font-semibold text-lg rounded-lg hover:bg-orange-600">
        Checkout (${calculateCartTotal()})
      </button>
    </div>
  );
}

export default CartItem;