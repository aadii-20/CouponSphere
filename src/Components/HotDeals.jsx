import React from "react";
import {
  Zomato,
  Swiggy,
  EatSure,
  Dominos,
  BehrouzBiryani,
  ShoppersStop,
} from "../FoodImages/FoodImages";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";

function HotDeals() {
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();

  const products = [
    {
      name: "Zomato",
      offer: "Flat 5% off",
      code: "NYK5",
      url: "https://www.zomato.com/",
      image: Zomato,
    },
    {
      name: "Swiggy",
      offer: "Flat 8% off",
      code: "NYK5",
      url: "https://www.swiggy.com/",
      image: Swiggy,
    },
    {
      name: "Pizza Hut",
      offer: "Flat 6% off",
      code: "NYK5",
      url: "https://www.pizzahut.co.in/",
      image:
        "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg",
    },
    {
      name: "KFC",
      offer: "Flat 2% off",
      code: "NYK5",
      url: "https://online.kfc.co.in/",
      image: "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
    },
    {
      name: "Eat Sure",
      offer: "Flat 7% off",
      code: "NYK5",
      url: "https://www.eatsure.com/",
      image: EatSure,
    },
    {
      name: "Dominos",
      offer: "Flat 2% off",
      code: "NYK5",
      url: "https://www.dominos.co.in/",
      image: Dominos,
    },
    {
      name: "Shoppers Stop",
      offer: "Flat 15% off",
      code: "NYK5",
      url: "https://www.shoppersstop.com/home",
      image:
        "https://www.chittorgarh.net/images/ipo/shoppers-stop-rights-issue.jpg",
    },
    {
      name: "Behrouz Biryani",
      offer: "Flat 5% off",
      code: "NYK5",
      url: "https://www.behrouzbiryani.com/",
      image: BehrouzBiryani,
    },
  ];

  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">
        Hot Deals and Best Sellers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-1">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 max-w-sm bg-white group cursor-pointer"
            onClick={() => {
              setSelectedProduct(product);
              localStorage.setItem("selectedProduct", JSON.stringify(product));
              navigate("/product");
            }}
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md w-full ml-39 object-content max-h-48 md:h-64 lg:h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <p className="bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white py-2 text-xs font-semibold rounded-s-lg inline-block absolute top-0 left-1 -translate-x-1.5 px-2 transition-all duration-300 ease-in-out group-hover:top-[-0.5rem] group-hover:left-[-0.5rem]">
                {product.offer}
              </p>
            </div>

            <div className="flex items-center flex-col justify-between mt-4 gap-1">
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <div className=" text-zinc-900 border-[1px] border-orange-500 text-sm px-3 py-1 rounded-lg">
                Promo code
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full text-center my-4">
        <button className="py-3 px-5 font-semibold rounded-lg bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white">
          View More
        </button>
      </div>
    </div>
  );
}

export default HotDeals;
