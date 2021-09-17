import * as S from "./style";

const MemberContainer = () => {
  return (
    <S.MemberContainer>
      <S.FlexBox>
        <S.MemberImg />
        <S.PersonalInformation>
          <S.MemberName>회원이름</S.MemberName>
          <S.MemberInfo>서울/24/남</S.MemberInfo>
        </S.PersonalInformation>
      </S.FlexBox>
      <S.FlexBox>
        <S.MemberBackNumberInput type="number" min="1" max="99"/>
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
