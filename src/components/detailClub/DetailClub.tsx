import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useHistory } from "react-router";
import { KakaoTalkIcon, LocationIcon } from "../../assets";
import { applyMembership } from "../../util/api/detailClub";
import UseClubInfo from "../../util/hooks/clubInfo";
import { MatchCard } from "../common";
import Member from "./member/Member";
import * as S from "./style";

const matchList = [
  {
    myProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU",
    yourProfile: "",
    area: "보령",
    myName: "동네축구",
    date: "12월 5일",
    matchStatus: false,
    opposingTeam: "???",
    myScore: -1,
    yourScore: -1,
  },
  {
    myProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU",
    yourProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4giwxamewZyZsY4-j_WpOg0-BIaRsoCwfA&usqp=CAU",
    area: "보령",
    myName: "동네축구",
    date: "11월 25일",
    matchStatus: true,
    opposingTeam: "축구한판",
    myScore: 2,
    yourScore: 3,
  },
  {
    myProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU",
    area: "보령",
    yourProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFInk7PX8GQukpTV7bXfnjqgCiw0tOvcevQ&usqp=CAU",
    myName: "동네축구",
    date: "11월 21일",
    matchStatus: true,
    opposingTeam: "리버풀",
    myScore: 3,
    yourScore: 1,
  },
  {
    myProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU",
    area: "보령",
    yourProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcbJtLuz3x_erb3_ZjDCkODn79MQ4qHiLWw&usqp=CAU",
    myName: "동네축구",
    date: "11월 15일",
    matchStatus: true,
    opposingTeam: "대전FC",
    myScore: 1,
    yourScore: 5,
  },
  {
    myProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU",
    area: "보령",
    yourProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4giwxamewZyZsY4-j_WpOg0-BIaRsoCwfA&usqp=CAU",
    myName: "동네축구",
    date: "11월 5일",
    matchStatus: true,
    opposingTeam: "축구한판",
    myScore: 2,
    yourScore: 1,
  },
];

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
            {matchList.map((v, i) => {
              return <MatchCard key={i} {...v} />;
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
