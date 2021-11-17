import React, { useState } from "react";
import { ClubMemberResponseType } from "../../../../constance/clubManagement";
import * as S from "./style";

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
        <S.MemberPositionSelectBox>
          <option value="골키퍼">골키퍼</option>
          <option value="수비수">수비수</option>
          <option value="미드필더">미드필더</option>
          <option value="공격수">공격수</option>
        </S.MemberPositionSelectBox>
        <S.KickOutBtn>강퇴</S.KickOutBtn>
      </S.FlexBox>
    </S.MemberContainer>
  );
};

export default MemberContainer;
