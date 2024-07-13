import React from "react";
import Hero from "../component/Hero";
import Collection from "../component/Collection";
import Review from "../component/Review";
import Hero2 from "../component/Hero2";
import CarouselShop from "../component/CarouselShop";
import Question from "../component/Question";

function Shop() {
  return (
    <div>
      <Hero />
      {/* <CarouselShop /> */}
      <Hero2 />
      <Collection />
      <Review />
      <Question />
    </div>
  );
}

export default Shop;
