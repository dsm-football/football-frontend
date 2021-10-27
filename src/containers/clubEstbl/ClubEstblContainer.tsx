import React, { Suspense, FC } from "react";
import { Header, PageMoveHeader } from "../../components/common";
import ClubEstblItem from "./ClubEstblItem";
const clubEstblContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <PageMoveHeader header={"동호회 개설"} />
      <ClubEstblItem />
    </Suspense>
  );
};

export default clubEstblContainer;
