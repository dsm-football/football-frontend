import React, { FC, Suspense } from "react";
import { Header } from "../../components/common";
import MatchResult from "../../components/matchResult/MatchResult";

const MatchResultContainer: FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <MatchResult />
      </Suspense>
    </>
  );
};

export default MatchResultContainer;
