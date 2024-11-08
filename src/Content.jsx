import { useState } from 'react'
import plus from "./assets/icon-plus.svg"
import minus from "./assets/icon-minus.svg"
import cartIcon from "./assets/icon-cart.svg"
import ImageSlider from "./ImageSlider"
import { useDispatch } from 'react-redux';
import { addToCart } from "./cartSlice"
import { v4 as uuidv4 } from 'uuid';

function Content() {

    const [quantity, setQuantity] = useState(1)
    //const cart = useSelector((state) => state.cart);
    const dispatcher = useDispatch();

    const handleAddToCart = () =>{
       dispatcher(addToCart({ id: uuidv4(), name: 'Nike Limited Edition Sneakers', price: 125, quantity}));
        setQuantity(1)
    }
    const handleIncrement = () => {
        setQuantity((prev) => prev + 1)
    }

    const handleDecrement = () => {
        setQuantity((prev) => prev > 0 ? prev - 1 : 0)
    }

    return (
        <div className="container mx-auto px-4 py-8 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-7xl mx-auto">
                {/* Image Slider Section */}
                <div className="lg:flex-1">
                    <ImageSlider />
                </div>

                {/* Product Details Section */}
                <div className="lg:flex-1 space-y-6 mt-8 lg:mt-0">
                    {/* Brand Name */}
                    <h2 className="text-orange-500 font-bold tracking-wider text-sm uppercase">
                        Sneaker Company
                    </h2>

                    {/* Product Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                        Fall Limited Edition Sneakers
                    </h1>

                    {/* Product Description */}
                    <p className="text-gray-500 leading-relaxed">
                        These low-profile sneakers are your perfect casual wear companion. 
                        Featuring a durable rubber outer sole, they'll withstand everything 
                        the weather can offer.
                    </p>

                    {/* Price Section */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-gray-900">$125.00</span>
                            <span className="bg-orange-100 text-orange-500 font-bold px-2 py-1 rounded">
                                50%
                            </span>
                        </div>
                        <div className="text-gray-400 line-through">$250.00</div>
                    </div>

                    {/* Actions Section */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 sm:w-36">
                            <button 
                                onClick={handleDecrement}
                                className="text-orange-500 hover:opacity-75 transition-opacity p-1"
                            >
                                <img src={minus} alt="Decrease quantity" className="w-3 h-1" />
                            </button>
                            <span className="font-bold text-gray-900">{quantity}</span>
                            <button 
                                onClick={handleIncrement}
                                className="text-orange-500 hover:opacity-75 transition-opacity p-1"
                            >
                                <img src={plus} alt="Increase quantity" className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button 
                        onClick={handleAddToCart}
                            className=" bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-lg 
                                     flex items-center justify-center gap-6 shadow-lg shadow-orange-500/50 
                                     transition-colors duration-200 "
                        >
                            <img src={cartIcon} alt="" className="w-5 h-5 brightness-200" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content