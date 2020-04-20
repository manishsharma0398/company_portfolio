import React from "react";
import "../../assets/styles/Body.css";
import Card from "./Card";

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <Card
          to="/intro"
          imgPath="https://images.pexels.com/photos/972391/pexels-photo-972391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          title="Intro"
          subTitle="view"
        />
        <Card
          to="/originAndFounder"
          imgPath="https://images.pexels.com/photos/2951457/pexels-photo-2951457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          title="Origin & Founder"
          subTitle="view"
        />
      </div>
      <div className="container">
        <Card
          to="/people"
          imgPath="https://images.pexels.com/photos/3683586/pexels-photo-3683586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          title="People"
          subTitle="view"
        />
        <Card
          to="/newIntentions"
          imgPath="https://images.pexels.com/photos/4110226/pexels-photo-4110226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          title="New Intentions"
          subTitle="view"
        />
      </div>
      <div className="container">
        <Card
          to="/ethics"
          imgPath="https://images.pexels.com/photos/3312664/pexels-photo-3312664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          title="Ethics"
          subTitle="view"
        />
        <Card
          to="/seniorManagement"
          imgPath="https://images.pexels.com/photos/3324591/pexels-photo-3324591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Senior Management"
          subTitle="view"
        />
      </div>
    </div>
  );
};

export default Body;
