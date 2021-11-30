import React, { FC } from "react";
import * as S from "./style";

type Props = {
  closeSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: FC<Props> = (props) => {
  return (
    <S.GrayScreen
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.closeSideBar(false);
      }}
    >
      <S.Container>
        <S.UserInfoWrapper>
          <S.UserName>이진우</S.UserName>
          <S.UserGrade>매니저님</S.UserGrade>
        </S.UserInfoWrapper>
        <S.UserRecord>4.8점 / 12회 / 3승</S.UserRecord>
        <S.MyPageLink to="/mypage">{"마이페이지"}</S.MyPageLink>
        <S.PageLinkWrapper>
          <S.PageLink to="/">홈</S.PageLink>
          <S.PageLink to="/match/registration">매칭 등록</S.PageLink>
          <S.PageLink to="/clublist">동호회 리스트</S.PageLink>
          <S.PageLink to="/club/1">가입한 동호회</S.PageLink>
          <S.PageLink to="/club/management/1">동호회 관리</S.PageLink>
          <S.PageLink to="/chatting">채팅</S.PageLink>
        </S.PageLinkWrapper>
        <S.LogoutBtn>로그아웃</S.LogoutBtn>
      </S.Container>
    </S.GrayScreen>
  );
};

export default Sidebar;
