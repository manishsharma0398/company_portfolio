import React from "react";

import Screen from "../components/widgets/Screen";

const Intentions = () => {
  return (
    <Screen
      title="New Intentions"
      subTitle="New Intentions - New Beginning"
      body={[
        "We know this is our breakpoint. Every few years an establishment should restructure and reposition, so as to adapt to the present and prepare for the future. We tested these waters exactly two years ago, in 2013, and we realized we had immeasurable potential. That moment was a New Beginning, the commencement of a New Era, and we began devoting ourselves to making decisions that will continue to scale closer to our vision. We are a great organisation, one that’s ready to shine and flourish, a place that feels like home. We live in the future, and we continue to embrace every single moment as a new opportunity!",
      ]}
      imgPath=""
      footer={[<p>D. 4 / Apr / 2015</p>, <p>T. 19:22</p>]}
    />
  );
};

export default Intentions;
