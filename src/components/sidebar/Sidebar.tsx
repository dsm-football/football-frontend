import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import UseMyProfile from "../../util/hooks/myProfile";
import * as S from "./style";

type Props = {
  closeSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: FC<Props> = (props) => {
  const { state, setState } = UseMyProfile();
  const { profileInfo } = state;
  const { name, is_club_executive, is_pro, club_id } = profileInfo;
  const history = useHistory();

  useEffect(() => {
    setState.setMyProfile();
  }, []);

  const onClickLogOut = () => {
    localStorage.removeItem("access_token");
    alert("로그아웃 성공");
    window.location.reload();
  };

  return (
    <S.GrayScreen
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.closeSideBar(false);
      }}
    >
      <S.Container>
        {club_id ? (
          <>
            <S.UserInfoWrapper>
              <S.UserName>{name}</S.UserName>
              <S.UserGrade>
                {is_club_executive ? "매니저님" : "회원님"}
              </S.UserGrade>
            </S.UserInfoWrapper>
            <S.UserRecord>{is_pro ? "선출" : "비선출"}</S.UserRecord>
            <S.MyPageLink to="/mypage">마이페이지</S.MyPageLink>
          </>
        ) : (
          <S.LoginBtn
            onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </S.LoginBtn>
        )}
        <S.PageLinkWrapper>
          <S.PageLink to="/">홈</S.PageLink>
          <S.PageLink to={is_club_executive ? "/match/registration" : "/#"}>
            매칭 등록
          </S.PageLink>
          <S.PageLink to="/clublist">동호회 리스트</S.PageLink>
          <S.PageLink to={club_id ? "/club/" + club_id : "/#"}>
            가입한 동호회
          </S.PageLink>
          <S.PageLink
            to={is_club_executive ? "/club/management/" + club_id : "/#"}
          >
            동호회 관리
          </S.PageLink>
          <S.PageLink to="/chatting">채팅</S.PageLink>
        </S.PageLinkWrapper>
        <S.LogoutBtn onClick={onClickLogOut}>로그아웃</S.LogoutBtn>
      </S.Container>
    </S.GrayScreen>
  );
};

export default Sidebar;
