import React from "react";

import Screen from "../components/widgets/Screen";

const Intro = () => {
  return (
    <Screen
      title="Intro"
      subTitle="Message from our CEO"
      body={[
        "We live in brilliant times! At the core of every problem or traumatic experience gracefully resides a hidden opportunity. All it takes to discover and bring this potential to fruition is to examine it. And the bigger the problem, the bigger the opportunity. There is potential, and beauty, within everyone and everything – all it takes is an examination of the details. 94 percent of the world considers these details insignificant: many of these details are visible to children and toddlers, but most of them are unable to measure or interpret the potential the potential that underlies them.",
        "Everything is an organism. While there are natural laws and scientific rules we need to acknowledge and consider, an organisation is not an exception to these laws. It follows particular formulas, and these formulas apply in all directions. From this perspective, there is truly a recipe for success. We are developing this recipe.",
        "No matter its nature or size, every establishment has potential. R Group is an unconventional company, and we believe in our potential. We are ready to grow and expand, to burn brightly. Our mission is to invent and create, to revolutionize…to innovate. To manufacture products of every type, for any use. To do it right while paying careful attention to the details. To create ideal jobs for people. To transcend ourselves and manufacture iconic products. To inspire the world…to go beyond.",
        "This is only the beginning. All we need is time…",
      ]}
      imgPath="https://images.squarespace-cdn.com/content/v1/5515a1f7e4b07674243b2e6a/1559060491154-F6S5J8YI1P7MOTQD1SPA/ke17ZwdGBToddI8pDm48kLIlgGwj-mTxLXNfixDPpLd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZ9UlH9cG8lYVFo2vwWncFaEKQct4sr-zfRGygzjusd3oRwB-dUGsSquCnVTFQcaRg/AndreasLoizou.png?format=750w"
      footer={[
        <p>
          Andreas Loizou, <br /> CEO, <br /> Executive Director of the Board of
          Directors,
        </p>,
      ]}
    />
  );
};

export default Intro;
