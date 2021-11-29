import React from "react";
import { ApplicantGameClubListResponseType } from "../../../../constance/clubInfo";
import * as S from "./style";

const ApllicationMatching = (props: ApplicantGameClubListResponseType) => {
  const { club_id, club_name, club_profile } = props;

  return (
    <S.ApplicationMatch>
      <img src={club_profile} alt="동호회 프로필" />
      <span>{club_name}팀이 작성하신 매치에 대해 신청을 보냈습니다.</span>
      <button>대화</button>
    </S.ApplicationMatch>
  );
};

export default ApllicationMatching;
