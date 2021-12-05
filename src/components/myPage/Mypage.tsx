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

  return (
    <>
      <S.MainWrapper>
        <S.Div>
          <S.Profile src={profileInfo.profile} alt="프로필" />
          <div>
            <S.Name>{profileInfo.name}</S.Name>
            <S.Player>
              {profileInfo.is_pro ? "선수출신" : "비선수출신"}
            </S.Player>
          </div>
        </S.Div>
        <S.Div>
          <UserExplain user={profileInfo} />
        </S.Div>
      </S.MainWrapper>
    </>
  );
};

export default Mine;
