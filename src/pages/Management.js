import React from "react";

import Screen from "../components/widgets/Screen";

const Management = () => {
  return (
    <Screen
      title="Senior Management"
      subTitle="Message from The Top Management"
      body={[
        "We are not convinced by traditionally-structured organizations, and thus we are not a traditionally-structured organisation. We believe in futuristic structures and innovative company formations, such as cloud organisations, establishments that operate fully in the Cloud. Where management and team members share the same knowledge, where everyone has access to brilliant concepts and exceptional ideas. It doesn’t matter where you’re from – we are all found on the same spectrum. We have created a private, secure space, our own, where we communicate and share. Where we build fast, responsive, solid partnerships. We now feel it’s time to share and spread our knowledge. It would truly be a shame to keep it all for ourselves.",
        "We believe in people. We believe in knowledge: in IT, in maths, in science…we believe in creativity, in asking questions. We believe in inspiring people. In triumph. So we are reinventing the R Group, developing a new organisation, one that’s helping to build the future, an organisation that scales, that learns from every moment. Our management team of seven executive experts collaborates in the same secure cloud, realising an ecological, futuristic business vision.",
      ]}
      imgPath=""
      footer={[
        <p>
          D. 4 / Apr / 2015 <br />
          T. 20:54
        </p>,
      ]}
    />
  );
};

export default Management;
