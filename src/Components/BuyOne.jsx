import React from "react";
import makemytrip_hotel from "../assets/makemytrip_hotel.jpeg"
import makemytrip_holiday from "../assets/makemytrip_holiday.jpeg"

function BuyOne() {
  const cards = [
    {
      id: 1,
      title: "Taj Hotel",
      description: "Buy a MakeMyTrip Hotel Gift Card & get a complimentary...",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2c87863147935.5aa799ab2775d.jpg",
    },
    {
      id: 2,
      title: "MakeMyTrip Hotel ",
      description: "Go, Discover this Magical World!",
      img: makemytrip_hotel,
    },
    {
      id: 3,
      title: "MakeMyTrip Holiday ",
      description: "Enjoy the magical beaches with MakeMyTrip Gift Cards!",
      img: makemytrip_holiday,
    },
  ];

  return (
    <div className="w-full mt-6 items-center">
      <h1 className="text-4xl font-bold text-center mb-6">
        Buy One Get One - Double the Joy
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Center the grid */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base opacity-0">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyOne;
