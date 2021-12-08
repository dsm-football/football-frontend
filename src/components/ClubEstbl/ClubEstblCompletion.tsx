import React from "react";
import * as S from "./style";
import { CameraImg } from "../../assets";
import { useDispatch } from "react-redux";
import { setPageIndex } from "../../modules/redux/action/clubEstbl";
import { useHistory } from "react-router";
const ClubEstblCompletion = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setPageIndex(5));
    alert("클럽이 생성되었습니다.");
    history.push("/");
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
