import React from "react";
import * as S from "./style";
import SelectSoccerKind from "./SelectSoccerKind";
import MatchingInfo from "./MatchingInfo";
import MatchingOtherInfo from "./MatchingOtherInfo";
import NoticeModal from "../common/noticeModal/NoticeModal";
import useMatchingRegistration from "../../util/hooks/matchingRegistration";
import { MatchPrevIcon } from "../../assets";
import MatchInfoCheck from "./MatchInfoCheck";

const MatchingRegistration = () => {
  const { state, setState } = useMatchingRegistration();

  const onClickPrevBtn = () => {
    state.page !== 0 && setState.setPage(state.page - 1);
    return;
  };

  return (
    <>
      {state.noticeMessage !== "" && <NoticeModal />}
      <S.MatchingRegistrationHeader>
        <img src={MatchPrevIcon} alt="이전 아이콘" onClick={onClickPrevBtn} />
        <span>매칭 생성하기</span>
      </S.MatchingRegistrationHeader>
      {state.page === 0 && (
        <SelectSoccerKind matchOption={state.matchOption} {...setState} />
      )}
      {state.page === 1 && (
        <MatchingInfo matchOption={state.matchOption} {...setState} />
      )}
      {state.page === 2 && (
        <MatchingOtherInfo matchOption={state.matchOption} {...setState} />
      )}
      {state.page === 3 && <MatchInfoCheck {...state} {...setState} />}
    </>
  );
};

export default MatchingRegistration;
