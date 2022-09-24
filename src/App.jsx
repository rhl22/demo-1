import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./data";

export default function App() {
  //<Hero />
  // Array of objects
  console.log(Data);
  const Dt = Data.map((x) => {
    return (
      <Card
        img={x.coverImg}
        rating={x.stats.rating}
        reviewCount={x.stats.reviewCount}
        country={x.location}
        title={x.description}
        price={x.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{Dt}</section>
    </>
  );
}
