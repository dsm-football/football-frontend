import React, { useState } from "react";
import { ClubMemberResponseType } from "../../../../constance/clubManagement";
import * as S from "./style";

const positionArray = ["골키퍼", "수비수", "미드필더", "공격수"];

const MemberContainer = (props: ClubMemberResponseType) => {
  const [backNum, setBackNum] = useState<number>(props.club_back_num);

  const onChangeBackNum = (e: any) => {
    setBackNum(e.target.value);
  };

  return (
    <S.MemberContainer>
      <S.FlexBox>
        <S.MemberImg src={props.profile} alt="멤버 프로필" />
        <S.PersonalInformation>
          <S.MemberName>{props.name}</S.MemberName>
          <S.MemberInfo>
            {props.area.substr(0, 2)}/{props.age}/{props.gender}
          </S.MemberInfo>
        </S.PersonalInformation>
      </S.FlexBox>
      <S.FlexBox>
        <S.MemberBackNumberInput
          type="number"
          min="1"
          max="99"
          value={backNum}
          onChange={onChangeBackNum}
        />
        <S.MemberPositionSelectBox defaultValue={props.position}>
          {positionArray.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </S.MemberPositionSelectBox>
        <S.KickOutBtn>강퇴</S.KickOutBtn>
      </S.FlexBox>
    </S.MemberContainer>
  );
};

export default MemberContainer;
