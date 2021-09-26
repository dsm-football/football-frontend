import React from "react";
import Header from "../common/header/Header";
import Near from "./nearmatching/NearMatching";
import Area from "./areamatching/AreaMatching";
import Rank from "./ranking/Raking";

const Main = () => {
  return (
    <>
      <Header />
      <Near />
      <div>
        <Area />
      </div>
      <div>
        <Rank />
      </div>
    </>
  );
};

export default Main;
