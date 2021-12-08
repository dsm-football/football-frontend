import React, { FC, Suspense } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/common";
import MatchResult from "../../components/matchResult/MatchResult";

const MatchResultContainer: FC = () => {
  const { id } = useParams() as any;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <MatchResult id={id} />
      </Suspense>
    </>
  );
};

export default MatchResultContainer;
