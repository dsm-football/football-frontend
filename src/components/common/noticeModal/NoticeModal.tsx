import React from "react";
import * as S from "./style";

const NoticeModal = () => {
  return (
    <>
      <S.GrayScreen>
        <S.ModalWrapper>
          <S.ModalTitle>Notice</S.ModalTitle>
          <S.NoticeContent>매칭지역을 선택해주세요.</S.NoticeContent>
          <S.NoticeCheckBtn>확인</S.NoticeCheckBtn>
        </S.ModalWrapper>
      </S.GrayScreen>
    </>
  );
};

export default NoticeModal;
