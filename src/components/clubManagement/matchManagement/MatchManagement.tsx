import React, { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useHistory } from "react-router";
import { ApplicantGameClubListResponseType } from "../../../constance/clubInfo";
import { getApplicantGameClubList } from "../../../util/api/clubManagement";
import { MatchCard } from "../../common";
import ApplicationMatching from "./matchRequst/ApplicationMatching";
import * as S from "./style";

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
          history.goBack();
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
                return <ApplicationMatching key={i} {...v} />;
              })
            )}
          </S.MatchingApplicationList>
        </S.MatchContainer>
        <S.MatchContainer>
          <h3>작성한 매치</h3>
          <S.MatchSlideList>
            <ScrollMenu>
              {Array(5)
                .fill(0)
                .map((v, i) => {
                  return <MatchCard key={i} />;
                })}
            </ScrollMenu>
          </S.MatchSlideList>
        </S.MatchContainer>
        <S.MatchContainer>
          <h3>신청한 매치</h3>
          <S.MatchSlideList>
            <ScrollMenu>
              {Array(5)
                .fill(0)
                .map((v, i) => {
                  return <MatchCard key={i} />;
                })}
            </ScrollMenu>
          </S.MatchSlideList>
        </S.MatchContainer>
      </S.MatchingList>
    </>
  );
};

export default MatchManagement;
