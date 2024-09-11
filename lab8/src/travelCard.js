import React, { useState } from "react";

const TravelCard = ({ destination }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={destination.image} alt={destination.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{destination.title}</div>
        <p className="text-gray-700 text-base">{destination.features}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleLikeClick}
          className={`text-red-500 ${liked ? "text-4xl" : "text-2xl"}`}
        >
          {liked ? "❤️" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
