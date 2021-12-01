import React, { FC } from "react";
import { ClubMemberResponseType } from "../../../constance/clubInfo";
import * as S from "../style";

const Member: FC<ClubMemberResponseType> = (props) => {
  const { profile, name, club_back_num, area, age, gender, position } = props;

  return (
    <>
      <S.MemberContainer>
        <img src={profile} alt="프로필" />
        <div>
          <span className="memberMainInfo">
            <strong>{club_back_num}</strong> {name}
          </span>
          <span className="memberOtherInfo">
            {area}/{age}/{gender}/{position}
          </span>
        </div>
      </S.MemberContainer>
    </>
  );
};

export default Member;
