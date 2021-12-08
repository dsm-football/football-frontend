import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { MatchOptionType } from "../../constance/matchingRegistration";
import { error } from "../../models/error";
import { POST_MATCHINGREGISTRATION } from "../../modules/redux/action/matchingRegistration/interface";
import * as S from "./style";
import { ageOption, genderOption } from "../../constance/option";

type Props = {
  setMatchOption: (payload: MatchOptionType) => void;
  setPage: (payload: number) => void;
  matchOption: MatchOptionType;
  error: error | null;
  page: number;
  noticeMessage: string;
};

const MatchInfoCheck = (props: Props) => {
  const { setMatchOption, setPage, matchOption } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const onCickMatchingRegistration = () => {
    dispatch({ type: POST_MATCHINGREGISTRATION });
  };

  useEffect(() => {
    if (props.error?.status === 400) {
      alert("매칭이 등록되었습니다!");
      history.goBack();
    } else if (props.error?.status === 401) {
      alert("인증 오류");
      history.goBack();
    } else if (props.error?.status === 403) {
      alert("동호회 관리자가 아닙니다.");
      history.goBack();
    } else if (props.error?.status === 404) {
      alert("동호회를 찾을 수 없습니다.");
      history.goBack();
    } else if (props.error?.status === 500) {
      alert("잠시 후 다시 시도해주세요.");
      history.goBack();
    }
  }, [props.error]);

  return (
    <>
      <S.MainWrapper>
        <S.MatchCheckWrapper>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>매칭 지역</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>{matchOption.area}</S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>경기 날짜</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>{matchOption.matchDate}</S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>경기 시간</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>{matchOption.matchTime}</S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>매칭 마감일</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>{matchOption.endDate}</S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>매칭 경기</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>
              {matchOption.gameType === 1 ? "풋살" : "축구"}
            </S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>팀 인원</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>{matchOption.person}</S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>나이</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>
              {ageOption[matchOption.age - 1]}
            </S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>성별</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>
              {genderOption[matchOption.gender - 1]}
            </S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>심판</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>
              {matchOption.hasReferee ? "심판 있어요" : "심판 없어요"}
            </S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
          <S.MatchInfoCheckRow>
            <S.MatchInfoCheckTitle>장소</S.MatchInfoCheckTitle>
            <S.MatchInfoCheckFont>
              대덕소프트웨어마이스터고
            </S.MatchInfoCheckFont>
          </S.MatchInfoCheckRow>
        </S.MatchCheckWrapper>
        <S.MatchingInfoCheckWrapper>
          <S.Directive>매칭 옵션을 확인해주세요.</S.Directive>
          <S.MatchingInfoCheckBtn onClick={onCickMatchingRegistration}>
            다음
          </S.MatchingInfoCheckBtn>
        </S.MatchingInfoCheckWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MatchInfoCheck;
