import React from "react";
import Header from "../common/header/Header";
import Near from "./nearmatching/NearMatching";
import Area from "./areamatching/AreaMatching";

const Main = () => {
  return (
    <>
      <Header />
      <Near />
      <div>
        <Area />
      </div>
    </>
  );
};

export default Main;
