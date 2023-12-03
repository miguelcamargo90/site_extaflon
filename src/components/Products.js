import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Products } from "../data";
import Lightbox from "react-image-lightbox"; // Importe a biblioteca
import "react-image-lightbox/style.css"; // Importe os estilos da biblioteca

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openProductModal = (productIndex) => {
    setSelectedProduct(productIndex);
    setIsOpen(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };

  const prevProduct = () => {
    setPhotoIndex((photoIndex + Products[selectedProduct].image.length - 1) % Products[selectedProduct].image.length);
  };

  const nextProduct = () => {
    setPhotoIndex((photoIndex + 1) % Products[selectedProduct].image.length);
  };

  return (
    <section id="products" className="w-full">
      <div className="mx-auto bg-green-900 bg-opacity-70 body-font">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-center my-10 bg-green-600 text-white">Alguns de nossos produtos</h2>
        </div>
        {/* Display product cards with titles and text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 sm:mx-auto sm:mb-2">
          {Products.map((product, index) => (
            <div key={index} className="p-2">
              <div className="bg-white rounded-lg p-4 hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <figure className="relative cursor-pointer">
                    {/* Use onClick para abrir o modal */}
                    <img
                      src={product.image[0]} // Use the first image as the card image
                      alt={product.name}
                      className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                      onClick={() => openProductModal(index)}
                    />
                  </figure>
                  <div className="text-teal-500 text-lg mt-4 text-center">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600 text-base mt-2">{product.subtitle}</p>
                    <p className="mt-2 text-gray-600 text-2">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for displaying the selected product */}
      {isOpen && selectedProduct !== null && (
        <Lightbox
          mainSrc={Products[selectedProduct].image[photoIndex]}
          nextSrc={Products[selectedProduct].image[(photoIndex + 1) % Products[selectedProduct].image.length]}
          prevSrc={Products[selectedProduct].image[(photoIndex + Products[selectedProduct].image.length - 1) % Products[selectedProduct].image.length]}
          onCloseRequest={closeProductModal}
          onMovePrevRequest={prevProduct}
          onMoveNextRequest={nextProduct}
          animationDuration={200}
          imageTitle={<h2 className="text-white">{Products[selectedProduct].name}</h2>}
          imageCaption={
            <div>
              <h3 className="text-white">{Products[selectedProduct].name}</h3>
              <p className="text-white text-lg">{Products[selectedProduct].description}</p>
            </div>
          }
        />
      )}
    </section>
  );
}
