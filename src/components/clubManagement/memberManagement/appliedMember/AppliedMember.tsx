import * as S from "./style";

const AppliedMember = () => {

  
  return (
    <>
      <S.MemberContainer>
        <S.ProfileWrapper>
          <S.ProfileImg />
          <S.MemberInfo>
            <S.MemberName>회원이름</S.MemberName>
            <S.MemberInfoFont>서울/24/남</S.MemberInfoFont>
          </S.MemberInfo>
        </S.ProfileWrapper>
        <S.AceeptContainer>
          <button>수락</button>
          <button>거절</button>
        </S.AceeptContainer>
      </S.MemberContainer>
    </>
  );
};

export default AppliedMember;
