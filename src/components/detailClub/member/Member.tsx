import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ClubMemberResponseType } from "../../../constance/clubInfo";
import * as S from "../style";

const Member: FC<ClubMemberResponseType> = (props) => {
  const { profile, name, club_back_num, area, age, gender, position, user_id } =
    props;

  return (
    <>
      <Link to={"/profile/" + user_id}>
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
      </Link>
    </>
  );
};

export default Member;
