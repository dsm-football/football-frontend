import React, { FC, useState } from "react";
import { useHistory } from "react-router";
import { VSIcon } from "../../assets";
import { postGameResult } from "../../util/api/matchResult";
import { PageMoveHeader } from "../common";
import * as S from "./style";

const MatchResult: FC<any> = (props) => {
  const [hostScore, setHostScore] = useState<number | undefined>();
  const [participantScore, setParticipantScore] = useState<
    number | undefined
  >();
  const history = useHistory();

  const onSubmitResult = () => {
    if (hostScore && participantScore) {
      postGameResult(Number(props.id), hostScore, participantScore)
        .then(() => {
          alert("등록 성공");
          history.goBack();
        })
        .catch(() => {
          alert("잠시 후 시도해주세요");
          history.goBack();
        });
    } else {
      alert("스코어를 입력해주세요.");
    }
  };

  return (
    <>
      <PageMoveHeader header="경기 결과 등록 페이지" />
      <S.MainWrapper>
        <S.ScoreWrapper>
          <div className="scoreInput">
            <input
              type="number"
              placeholder="00"
              value={hostScore || ""}
              onChange={(e) => {
                setHostScore(Number(e.target.value));
              }}
            />
            <span>우리팀</span>
          </div>
          <img src={VSIcon} alt="VS" />
          <div className="scoreInput">
            <input
              type="number"
              placeholder="00"
              value={participantScore || ""}
              onChange={(e) => {
                setParticipantScore(Number(e.target.value));
              }}
            />
            <span>상대팀</span>
          </div>
        </S.ScoreWrapper>
        <span className="subFont">얼마나 득점했나요?</span>
        <button className="checkBtn" onClick={onSubmitResult}>
          확인
        </button>
      </S.MainWrapper>
    </>
  );
};

export default MatchResult;
