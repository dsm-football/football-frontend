import React, { useEffect, useState, ChangeEventHandler } from "react";
import * as S from "./style";
import Header from "../common/header/Header";
import UserExplain from "./funciton";
import { MyPageToken } from "../../util/api/mypage";
import UseMyProfile from "../../util/hooks/myProfile";

const Mine = () => {
  const { state, setState } = UseMyProfile();
  const [isModifyMode, setIsModifyMode] = useState(false);
  const { profileInfo } = state;

  useEffect(() => {
    setState.setMyProfile();
  }, [state.id]);

  const updateForm: ChangeEventHandler = (e) => {
    const $target = e.target as HTMLInputElement;
  };

  const Modify = () => {
    if (!isModifyMode) return setIsModifyMode(true);
    setIsModifyMode(false);
  };

  return (
    <>
      <Header />
      <S.Modify onClick={Modify}>
        {isModifyMode ? "수정완료" : "수정하기"}
      </S.Modify>
      <S.Div>
        <S.Profile></S.Profile>
        <div>
          <S.Name>{profileInfo.name}</S.Name>
          <S.Player>{profileInfo.is_pro ? "선수출신" : "비선수출신"}</S.Player>
        </div>
      </S.Div>
      <S.Div>
        <UserExplain
          user={profileInfo}
          modifier={updateForm}
          isDisabled={!isModifyMode}
        />
      </S.Div>
    </>
  );
};

export default Mine;
