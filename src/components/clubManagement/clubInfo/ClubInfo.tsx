import * as S from "./style";

const ClubInfo = () => {
  return (
    <>
      <S.ProfileContainer>
        <S.ChangeImgBtn>이미지 변경하기</S.ChangeImgBtn>
        <S.ProfileImg />
      </S.ProfileContainer>
      <S.ClubInfoFixContainer>
        <S.FixBox>
          <S.TitleFont>동호회명</S.TitleFont>
          <S.BoldFixInput>FC어쩌구</S.BoldFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 소개(100자 이내)</S.TitleFont>
          <S.IntroFixInput>
            저희 팀은 한 달에 4번 정도 매치경기를 진행하고 있습니다. 나이
            상관없이 열정있으신 분들이라면 언제든지 환영합니다. 가입신청은
            1:1카톡 주세요
          </S.IntroFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 SNS</S.TitleFont>
          <S.FixInput>www.dkjfeksfjkasejfksejfesfkj.dfef</S.FixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회장 SNS</S.TitleFont>
          <S.FixInput>www.dkjfeksfjkasejfksejfesfkj.dfef</S.FixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 지역</S.TitleFont>
          <S.BoldFixInput>서울시 노원구 하계동</S.BoldFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 정원(현재 정원:25)</S.TitleFont>
          <S.BoldFixInput>FC어쩌구 <S.GpsImg/></S.BoldFixInput>
        </S.FixBox>
      </S.ClubInfoFixContainer>
    </>
  );
};

export default ClubInfo;
