import React from "react";
import Widget1 from "./Widget1";
import "./ThreeWidgets.css"; // Optional: for styling


import mainImage1 from "../Components/Capture.png";
import secondImage1 from "../Components/Capture1.png";
import mainImage2 from "../Components/Capture2.png";
import secondImage2 from "../Components/Capture3.png";
import mainImage3 from "../Components/Capture4.png";
import secondImage3 from "../Components/Capture5.png";
import mainImage4 from "../Components/Capture6.png";
import secondImage4 from "../Components/Capture7.png";
import mainImage5 from "../Components/Capture8.png";
import secondImage5 from "../Components/Capture9.png";
import mainImage6 from "../Components/Capture10.png";
// import secondImage3 from "../Components/Capture5.png";
const ThreeWidgets = () => {
  // Data to be passed as props
  const widgetData = [
    {
      mainImage: mainImage1,
      secondImage: secondImage1,
      title: "Total Service Provider",
      amount: "Rs. xxx.xx",
      percentageChange: "+5% more from last week"
    },
    {
      mainImage: mainImage2,
      secondImage: secondImage2,
      title: "New Service Provider",
      amount: "xxxx",
      percentageChange: "-10% from last week"
    },
    {
      mainImage: mainImage3,
      secondImage: secondImage3,
      title: "Total Revenue",
      amount: "xxxx",
      percentageChange: "+10% more from last week"
    },
    {
      mainImage: mainImage4,
      secondImage: secondImage4,
      title: "Average Rating",
      amount: "xxxx",
      percentageChange: "+10% more from last month"
    },
    {
      mainImage: mainImage5,
      secondImage: secondImage5,
      title: "Service Completion Rate",
      amount: "",
      percentageChange: "85% completed from last week"
    },
    {
      mainImage: mainImage6,
      secondImage: secondImage3,
      title: "Service Provider Retension Rate",
      amount: "",
      percentageChange: "+100% more from last week"
    }
  ];

  return (
    <div className="three-widgets-container">
      {widgetData.map((data, index) => (
        <Widget1
          key={index}
          mainImage={data.mainImage}
          secondImage={data.secondImage}
          title={data.title}
          amount={data.amount}
          percentageChange={data.percentageChange}
        />
      ))}
    </div>
  );
};

export default ThreeWidgets;
