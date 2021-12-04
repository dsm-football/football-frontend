import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useHistory } from "react-router";
import { KakaoTalkIcon, LocationIcon } from "../../assets";
import { applyMembership } from "../../util/api/detailClub";
import UseClubInfo from "../../util/hooks/clubInfo";
import { MatchCard } from "../common";
import Member from "./member/Member";
import * as S from "./style";

const DetailClub = () => {
  const { state } = UseClubInfo();
  const { memberList, id, clubInfo } = state;
  const {
    main_profile,
    sub_profile,
    name,
    description,
    sns,
    area,
    cycle,
    gender,
  } = clubInfo;
  const history = useHistory();

  const onClickApplyMembership = () => {
    applyMembership(id)
      .then((res) => {
        alert("가입 신청이 성공했습니다.");
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("로그인 후 이용하세요.");
          history.push("/");
        } else if (error.response?.status === 400) {
          alert("이미 동호회에 가입되어 있거나 모집중이 아닙니다.");
        } else if (error.response?.status === 404) {
          alert("동호회를 찾을 수 없습니다.");
        }
      });
  };

  return (
    <S.MainWrapper>
      <div className="clubIntro">
        <S.BannerWrapper>
          <S.BannerImg src={sub_profile} alt="베너 이미지" />
          <S.ProfileImg src={main_profile} alt="프로필 이미지" />
        </S.BannerWrapper>
        <S.ClubLocation>
          <img src={LocationIcon} alt="LocationIcon" />
          {area}
        </S.ClubLocation>
        <S.ClubInfoWrapper>
          <strong className="clubName">{name}</strong>
          <div className="clubDetailInfo">
            <div>
              {gender && <span>{gender}</span>}
              {<span>20대</span>}
              {cycle && <span>{cycle}</span>}
            </div>
            <a href={sns} target="blank">
              <img src={KakaoTalkIcon} alt="카카오톡" />
            </a>
          </div>
        </S.ClubInfoWrapper>
        <S.OneLineIntroduction>{description}</S.OneLineIntroduction>
      </div>
      <S.MatchList>
        <div className="matchListHeader">매칭목록</div>
        <div className="matchScroll">
          <ScrollMenu>
            {[...Array(5)].map((v, i) => {
              return <MatchCard key={i} />;
            })}
          </ScrollMenu>
        </div>
      </S.MatchList>
      <S.MemberList>
        <span className="memberTitle">회원(20)</span>
        <div className="memberList">
          {memberList.map((v, i) => {
            return <Member key={i} {...v} />;
          })}
        </div>
      </S.MemberList>
      <S.ApplicantBtn onClick={onClickApplyMembership}>가입하기</S.ApplicantBtn>
    </S.MainWrapper>
  );
};

export default DetailClub;
