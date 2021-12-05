import React, { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useHistory } from "react-router";
import { ApplicantGameClubListResponseType } from "../../../constance/clubInfo";
import { getApplicantGameClubList } from "../../../util/api/clubManagement";
import { MatchCard } from "../../common";
import ApplicationMatching from "./matchRequst/ApplicationMatching";
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

const appliedMatchList = [
  {
    myProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU",
    yourProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6tV5UwLDlE_FT_o3fecGPfO_QrtV_4DkUQ&usqp=CAU",
    area: "보령",
    myName: "동네축구",
    date: "12월 7일",
    matchStatus: false,
    opposingTeam: "서울FC",
    myScore: -1,
    yourScore: -1,
  },
];

const MatchManagement = () => {
  const [applicantGameClubList, setApplicantGameClubList] = useState<
    Array<ApplicantGameClubListResponseType>
  >([]);
  const history = useHistory();

  useEffect(() => {
    getApplicantGameClubList()
      .then((response) => {
        setApplicantGameClubList(response.data || []);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("로그인 후 이용하세요.");
          history.push("/");
        } else if (error.response?.status === 403) {
          alert("동호회 관리자가 아닙니다.");
          history.push("/");
          window.location.reload();
        }
      });
  }, []);

  return (
    <>
      <S.MatchingList>
        <S.MatchContainer>
          <h3>매치 요청</h3>
          <S.MatchingApplicationList>
            {applicantGameClubList.length === 0 ? (
              <S.MatchingApplicationNotice>
                매치 요청이 없습니다.
              </S.MatchingApplicationNotice>
            ) : (
              applicantGameClubList.map((v, i) => {
                return (
                  <div
                    onClick={() => {
                      history.push("/chatting");
                    }}
                  >
                    <ApplicationMatching key={i} {...v} />
                  </div>
                );
              })
            )}
          </S.MatchingApplicationList>
        </S.MatchContainer>
        <S.MatchContainer>
          <h3>작성한 매치</h3>
          <S.MatchSlideList>
            <ScrollMenu>
              {matchList.map((v, i) => {
                return <MatchCard key={i} {...v} />;
              })}
            </ScrollMenu>
          </S.MatchSlideList>
        </S.MatchContainer>
        <S.MatchContainer>
          <h3>신청한 매치</h3>
          <S.MatchSlideList>
            <ScrollMenu>
              {appliedMatchList.map((v, i) => {
                return <MatchCard key={i} {...v} />;
              })}
            </ScrollMenu>
          </S.MatchSlideList>
        </S.MatchContainer>
      </S.MatchingList>
    </>
  );
};

export default MatchManagement;
