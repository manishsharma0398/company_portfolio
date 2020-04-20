import React from "react";

import { Link } from "react-router-dom";

import Screen from "../components/widgets/Screen";

const People = () => {
  return (
    <Screen
      title="People"
      subTitle="Human Capital "
      body={[
        "We know everything matters, that every single detail must be considered and conceptualized. To be creative is to seek and find what others fail to see. The world is a massive, multidimensional space, and a single question can suggest infinite answers – the right one, the exact one, may not exist! The brightest ideas are often the simplest, and they are often waiting within the mind’s hidden spectrums. It is here where we visualize a concept, and object, moving from a blank canvas to a brilliant idea, one that might be everything.",
        "We believe in our people. We are constantly seeking great talent, multidimensional people who feel as we do about aesthetics, art, beauty, color, culture, entrepreneurship, globalisation, innovation, love, science, sensitivity and technology.",
        "Multidimensional People",
      ]}
      imgPath=""
      footer={[
        <p>Click to Apply @</p>,
        <Link to="/">careers@rolandos.com</Link>,
      ]}
    />
  );
};

export default People;
