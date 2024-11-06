import product1 from "./assets/image-product-1.jpg"
import product2 from "./assets/image-product-2.jpg"
import product3 from "./assets/image-product-3.jpg"
import product4 from "./assets/image-product-4.jpg"
import productthumbnails1 from "./assets/image-product-1-thumbnail.jpg"
import productthumbnails2 from "./assets/image-product-2-thumbnail.jpg"
import productthumbnails3 from "./assets/image-product-3-thumbnail.jpg"
import productthumbnails4 from "./assets/image-product-4-thumbnail.jpg"
import next from "./assets/icon-next.svg"
import previous from "./assets/icon-previous.svg"
import close from "./assets/icon-close.svg"

import { useState } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const images = [
    product1,
    product2,
    product3,
    product4,
  ];

  const thumbnails = [
    productthumbnails1,
    productthumbnails2,
    productthumbnails3,
    productthumbnails4,
  ];


    
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedThumbnail((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedThumbnail((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setSelectedThumbnail(index);
    setIsModalOpen(!isModalOpen);
  };

    function handleIsModalOpen(){
        setIsModalOpen(!isModalOpen);
    }
  return (
    <div className="max-w-2xl mx-auto">
      {/* Main Image Container */}
      <div className="relative">
        <div className="aspect-w-3 aspect-h-3 w-full">
          <img 
            src={images[currentIndex]} 
            alt={`Product ${currentIndex + 1}`} 
            className="object-cover  h-ful rounded-lg"
          />
        </div>

        {/* Navigation Buttons - Visible on mobile, hidden on larger screens */}
        <div className="lg:hidden">
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
          >
            <img src={previous} alt="Previous" className="w-3 h-3" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
          >
            <img src={next} alt="Next" className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-4 mt-4">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative rounded-lg overflow-hidden ${
              selectedThumbnail === index 
                ? 'ring-2 ring-orange-500' 
                : ''
            }`}
          >
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-full object-cover ${
                selectedThumbnail === index 
                  ? 'opacity-50' 
                  : 'hover:opacity-75'
              }`}
            />
          </button>
        ))}
      </div>


                {/* open up when the thumbnail is clicked */}
                        <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isModalOpen
          ? "visible opacity-100 bg-black/50"
          : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative max-w-xl w-full mx-4 lg:mx-0">
        <div className="aspect-w-3 aspect-h-3 w-full">
          <img
            src={images[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Navigation Buttons */}

                    
        <div className="absolute inset-0 flex items-center justify-between px-4">
                        {/* handlepreviousbutton */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
          >
            <img src={previous} alt="Previous" className="w-3 h-3" />
          </button>
                        {/* handlenextbutton */}
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
          >
            <img src={next} alt="Next" className="w-3 h-3" />
          </button>
        </div>
                {/* handlepreviousbutton */}
        <button
          onClick={handleIsModalOpen}
          className="absolute right-0 top-0 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
        >
          <img src={close} alt="Close" className="w-3 h-3" />
        </button>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {thumbnails.map((thumbnail, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative rounded-lg overflow-hidden ${
                selectedThumbnail === index
                  ? "ring-2 ring-orange-500"
                  : ""
              }`}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover ${
                  selectedThumbnail === index
                    ? "opacity-50"
                    : "hover:opacity-75"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
        

    </div>
  );
};

export default ImageSlider;