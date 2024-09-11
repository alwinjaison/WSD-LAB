import React from "react";
import TravelCard from "./travelCard";
import parisImage from "./images/eiffel-tower.jpg";
import maldivesImage from "./images/maldives.jpg";
import tokyoImage from "./images/tokyo.jpg";
import newYorkImage from "./images/newYork.jpg";
import romeImage from "./images/rome.jpg";
import "./index.css";

const travelData = [
  {
    title: "Paris Getaway",
    features: "Explore the Eiffel Tower, museums, and more.",
    image: parisImage,
  },
  {
    title: "Beach Paradise",
    features: "Relax on the sandy beaches of the Maldives.",
    image: maldivesImage,
  },
  {
    title: "Tokyo Adventure",
    features:
      "Discover the blend of traditional culture and modern skyscrapers.",
    image: tokyoImage,
  },
  {
    title: "New York City Lights",
    features:
      "Experience the vibrant city life, from Times Square to Central Park.",
    image: newYorkImage,
  },
  {
    title: "Rome Historical Journey",
    features: "Walk through ancient ruins, the Colosseum, and Renaissance art.",
    image: romeImage,
  },
];

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-6">
        Travel Destinations
      </h1>
      <div className="flex flex-wrap justify-center">
        {travelData.map((destination, index) => (
          <TravelCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
