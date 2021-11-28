import { ClubApplicationResponseType } from "../../../../constance/clubInfo";
import * as S from "./style";

const AppliedMember = (props: ClubApplicationResponseType) => {
  const { name, age, area, gender, profile } = props;

  return (
    <>
      <S.MemberContainer>
        <S.ProfileWrapper>
          <S.ProfileImg src={profile} alt="프로필 사진" />
          <S.MemberInfo>
            <S.MemberName>{name}</S.MemberName>
            <S.MemberInfoFont>
              {area.substr(0, 2)}/{age}/{gender}
            </S.MemberInfoFont>
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
