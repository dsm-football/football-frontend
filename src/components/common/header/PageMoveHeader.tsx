import React from "react";
import * as S from "./style";
import { Line } from "../../../assets/index";
const PageMoveHeader = () => {
  return (
    <S.PageMoveHeaderWrapper>
      <S.PageMove>이전</S.PageMove>
      <img src={Line} alt="" />
      <S.PageMoveTitle>동호회 개설</S.PageMoveTitle>
      <img src={Line} alt="" />
      <S.PageMove>다음</S.PageMove>
    </S.PageMoveHeaderWrapper>
  );
};

export default PageMoveHeader;
