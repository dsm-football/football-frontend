import React from "react";
import { useHistory } from "react-router";
import { ApplicantGameClubListResponseType } from "../../../../constance/clubInfo";
import { createChatRoom } from "../../../../util/api/clubManagement";
import * as S from "./style";

const ApllicationMatching = (props: ApplicantGameClubListResponseType) => {
  const { club_id, club_name, club_profile, user_id } = props;
  const history = useHistory();

  const onClickChat = () => {
    createChatRoom(user_id).then(() => {
      history.push("/chatting");
    });
  };

  return (
    <S.ApplicationMatch>
      <img src={club_profile} alt="동호회 프로필" />
      <span>{club_name}팀이 작성하신 매치에 대해 신청을 보냈습니다.</span>
      <button onClick={onClickChat}>대화</button>
    </S.ApplicationMatch>
  );
};

export default ApllicationMatching;
