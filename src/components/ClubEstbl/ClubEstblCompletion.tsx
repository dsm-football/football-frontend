import React from "react";
import * as S from "./style";
import { CameraImg } from "../../assets";
import { useDispatch } from "react-redux";
import { setPageIndex } from "../../modules/redux/action/clubEstbl";
const ClubEstblCompletion = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setPageIndex(5));
  };
  return (
    <>
      <S.ClubEstblCompletionWrapper>
        <span>
          축하합니다!
          <br />
          FC축구한판 동호회가 개설되었습니다.
        </span>
        <S.CompletionPage onClick={onClick}>완료</S.CompletionPage>
      </S.ClubEstblCompletionWrapper>
    </>
  );
};

export default ClubEstblCompletion;
