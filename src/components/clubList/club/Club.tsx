import React, { FC } from "react";
import { ClubListResponseType } from "../../../constance/clubList";
import * as S from "../style";
import { PeopleImg } from "../../../assets";

const Club: FC<ClubListResponseType> = (props) => {
  const {
    age_group,
    area,
    club_application_cnt,
    club_id,
    club_member_cnt,
    description,
    gender,
    name,
    profile,
  } = props;

  console.log(props);

  return (
    <>
      <S.Clubs>
        <S.Top>
          <S.ClubImage src={profile} alt="프로필사진" />
          <S.Explain>
            <S.ClubName>{name}</S.ClubName>
            <S.ClubExplain>{description}</S.ClubExplain>
          </S.Explain>
        </S.Top>
        <S.Selected>
          <S.BoxDiv>
            {area && <S.Box>{area}</S.Box>}
            {gender && <S.Box>{gender}</S.Box>}
            {age_group && <S.Box>{age_group}</S.Box>}
          </S.BoxDiv>
          <S.Recruit>
            {club_application_cnt ? club_application_cnt : 0}명 모집중
          </S.Recruit>
          <S.People>
            <img src={PeopleImg} alt="" />
            {club_member_cnt}
          </S.People>
        </S.Selected>
      </S.Clubs>
    </>
  );
};

export default Club;
