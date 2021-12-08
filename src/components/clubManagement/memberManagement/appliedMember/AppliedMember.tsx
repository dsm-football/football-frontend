import { useHistory } from "react-router";
import { ClubApplicationResponseType } from "../../../../constance/clubInfo";
import { applicationConsentMember } from "../../../../util/api/clubManagement";
import * as S from "./style";

const AppliedMember = (props: ClubApplicationResponseType) => {
  const { name, age, area, gender, profile, user_id } = props;
  const history = useHistory();

  const onClickApplicationMemberConsent = (consent: boolean) => {
    applicationConsentMember(consent, user_id)
      .then((res) => {
        alert(`성공적으로 ${consent ? "수락" : "거절"}했습니다.`);
        window.location.reload();
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          alert("로그인 후 이용하세요.");
          history.push("/login");
        } else if (error?.response?.status === 403) {
          alert("동호회 관리자가 아닙니다.");
        } else if (error?.response?.status === 404) {
          alert("모집 신청을 찾을 수 없습니다.");
        }
      });
  };

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
          <button
            onClick={() => {
              onClickApplicationMemberConsent(true);
            }}
          >
            수락
          </button>
          <button
            onClick={() => {
              onClickApplicationMemberConsent(false);
            }}
          >
            거절
          </button>
        </S.AceeptContainer>
      </S.MemberContainer>
    </>
  );
};

export default AppliedMember;
