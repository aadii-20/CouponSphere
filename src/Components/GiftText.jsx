import React from "react";

function GiftText() {
  return (
    <div>
      <div className="bg-[url('https://images4.alphacoders.com/138/thumb-1920-1384715.png')] bg-cover bg-center min-h-[50vh] w-full">
        <div className="flex flex-col items-center md:items-end justify-end w-full gap-5 px-5 md:pe-14 py-8">
          {/* Card 1 */}
          <div className="bg-white text-base md:text-lg font-semibold w-full md:w-1/2 flex flex-col items-center justify-between px-4 py-3 rounded-lg shadow-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center justify-between w-full">
              <p className="text-gray-800">BuyGifts Online</p>
              <button className="bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white px-3 py-1 rounded-full transition-colors duration-300">
                <i className="fa-solid fa-chevron-up text-white"></i>
              </button>
            </div>
            <div className="h-[1px] w-full bg-pink-100 my-3"></div>
            <p className="text-gray-700 text-sm md:text-base px-2 text-center md:text-left">
              Gift is more than just the act of giving or receiving something. A
              gift carries with it a warm sentiment and best wishes from the
              gift giver to the recipient. The demand for personalized gifts has
              increased with time, and so have the gifting ideas and options.
              People these days are always looking for unique gift ideas to
              surprise their loved ones and make them feel special.
            </p>
          </div>

          {/* Other Cards */}
          {[
            "Finding the Perfect Gift",
            "Embrace the New Gifting",
            "The Best Gifts for Festivals & Occasions",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white text-base md:text-lg font-semibold w-full md:w-1/2 text-zinc-900 flex items-center justify-between px-4 py-3 rounded-lg shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-gray-800">{title}</p>
              <button className="bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white px-3 py-1 rounded-full transition-colors duration-300">
                <i className="fa-solid fa-chevron-down text-white"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GiftText;
