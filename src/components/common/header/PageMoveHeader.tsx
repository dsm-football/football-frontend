import React from "react";
import * as S from "./style";

interface Header_comment {
  header?: string;
}
const PageMoveHeader = (props: Header_comment) => {
  return (
    <S.PageMoveHeaderWrapper>
      <S.PageMoveTitle>{props.header}</S.PageMoveTitle>
    </S.PageMoveHeaderWrapper>
  );
};

export default PageMoveHeader;
