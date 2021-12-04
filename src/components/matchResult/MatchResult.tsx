import React from "react";
import { PageMoveHeader } from "../common";
import MatchScore from "./matchScore/MatchScore";
import * as S from "./style";

const MatchResult = () => {
  return (
    <>
      <PageMoveHeader header="경기 결과 등록 페이지" />
      <MatchScore />
    </>
  );
};

export default MatchResult;
