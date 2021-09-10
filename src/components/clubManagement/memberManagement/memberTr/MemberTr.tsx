import * as S from "./style";

const MemberTr = () => {
  return (
    <S.MemberContainer>
      <S.TdContainer>
        <S.MemberImg />
      </S.TdContainer>
      <S.TdContainer>
        <S.MemberName>회원이름</S.MemberName>
        <S.MemberInfo>서울/24/남</S.MemberInfo>
      </S.TdContainer>
    </S.MemberContainer>
  );
};

export default MemberTr;
