import React from "react";

import Screen from "../components/widgets/Screen";

const Ethics = () => {
  return (
    <Screen
      title="Ethics"
      subTitle="Ethics"
      body={[
        "We strongly believe in trust, sustainable relationships built through respect, transparency and a passion for innovation and technologies. We make sure our ethics are in step with our growth and respond to market changes. We are optimistic and positive. We are shedding negativity.",
        "We revere arts, culture and science!",
      ]}
      imgPath="https://images.squarespace-cdn.com/content/v1/5515a1f7e4b07674243b2e6a/1559067044141-T2FKO2YAC6KDJLF8OX0G/ke17ZwdGBToddI8pDm48kJ2JNrqg38NLE6EINrl1fKp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQiUqCtUGgpUiQ2EX6aMiX3nA_QHVDaYinfwTwgxH48WOpYghpI-Ha_TwZsqqmJXng/BlueSea.png?format=750w"
      footer={[
        <p>
          “Andreas Loizou – CEO <br />
          Date: Sun 17, May 2015.”{" "}
        </p>,
      ]}
    />
  );
};

export default Ethics;
