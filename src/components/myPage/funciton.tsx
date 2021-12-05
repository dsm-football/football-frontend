import React, { FC, useEffect } from "react";
import { MyProfileResponseType } from "../../constance/myProfile";
import * as S from "./style";

type UserExplainProps = {
  user: MyProfileResponseType;
};

const UserExplain: FC<UserExplainProps> = ({ user }) => {
  return (
    <>
      <S.Divs>
        <S.InputInfo>
          <span>구글계정</span>
          <span className="info">{user.email}</span>
        </S.InputInfo>
        <S.InputInfo>
          <span>성별</span>
          <span className="info">{user.gender}</span>
        </S.InputInfo>
        <S.InputInfo>
          <span>나이</span>
          <span className="info">{user.age}</span>
        </S.InputInfo>
        <S.InputInfo>
          <span>포지션</span>
          <span className="info">{user.position}</span>
        </S.InputInfo>
        <S.InputInfo>
          <span>지역</span>
          <span className="info">{user.area}</span>
        </S.InputInfo>
        <S.InputInfo>
          <span>동호회 이름</span>
          <span className="info">{user.club}</span>
        </S.InputInfo>
        <S.InputInfo>
          <span>한줄소개</span>
          <span className="info">{user.bio}</span>
        </S.InputInfo>
      </S.Divs>
    </>
  );
};

export default UserExplain;
