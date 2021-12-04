import React, { useEffect, useState } from "react";
import * as S from "./style";
import AppliedMember from "./appliedMember/AppliedMember";
import MemberContainer from "./memberContainer/MemberContainer";
import UseClubInfo from "../../../util/hooks/clubInfo";
import {
  getApplicationMember,
  getClubApplicant,
  postClubApplicant,
} from "../../../util/api/clubManagement";
import { useHistory } from "react-router";
import { ClubApplicationResponseType } from "../../../constance/clubInfo";
import ApplicantModal from "./applicantModal/ApplicantModal";

const MemberManagement = () => {
  const [applicationStatus, setApplicationStatus] = useState<boolean>(false);
  const [applicationModal, setApplicationModal] = useState<boolean>(false);
  const [applicationCount, setApplicationCount] = useState<number>(0);
  const [applicationMemberList, setApplicationMemberList] = useState<
    Array<ClubApplicationResponseType>
  >([]);
  const { state, setState } = UseClubInfo();
  const history = useHistory();

  const errorOption = (errorCode: number) => {
    if (errorCode === 401) {
      alert("로그인 실패");
      history.push("/login");
      window.location.reload();
    } else if (errorCode === 403) {
      alert("동호회 관리자가 아닙니다.");
      history.push("/");
      window.location.reload();
    } else if (errorCode === 500) {
      alert("잠시 후 시도하세요.");
      history.push("/");
      window.location.reload();
    }
  };

  useEffect(() => {
    getApplicationMember()
      .then((response) => {
        setApplicationMemberList(response.data || []);
      })
      .catch((error) => {
        errorOption(error.response?.status);
      });

    getClubApplicant()
      .then((response: any) => {
        setApplicationStatus(response.data?.is_open);
        setApplicationCount(response.data?.count);
      })
      .catch((error) => {
        errorOption(error.response?.status);
      });
  }, [state.id]);

  return (
    <>
      {applicationModal && (
        <ApplicantModal
          closeModal={setApplicationModal}
          setApplicationStatus={setApplicationStatus}
          setApplicationCount={setApplicationCount}
        />
      )}
      <S.MainContainer>
        <S.AllowSubscription>
          <span>
            동호회 가입 신청 받기
            {applicationStatus && `(정원: ${applicationCount})`}
          </span>
          <S.SwitchContainer
            applicationStatus={applicationStatus}
            onClick={() => {
              if (!applicationStatus) {
                setApplicationModal(true);
              } else {
                postClubApplicant(0);
                setApplicationCount(0);
                alert("동호회 가입 신청 불가로 변경하였습니다.");
              }
              setApplicationStatus(!applicationStatus);
            }}
          >
            <S.Switch applicationStatus={!applicationStatus} />
          </S.SwitchContainer>
        </S.AllowSubscription>
        <S.AppliedMemberContainer>
          <b>
            <span>가입을 요청한 회원</span>
          </b>
          <S.AppliedMemberList>
            {applicationMemberList.length === 0 ? (
              <S.AppliedMemberListNotice>
                가입을 요청한 회원이 없습니다.
              </S.AppliedMemberListNotice>
            ) : (
              applicationMemberList.map((v, i) => {
                return <AppliedMember key={i} {...v} />;
              })
            )}
          </S.AppliedMemberList>
        </S.AppliedMemberContainer>
        <S.MemberListContainer>
          <b>
            <span>회원목록({state.memberList.length})</span>
          </b>
          <S.MemberList>
            <S.MemberAttribute>
              <span>회원정보</span>
              <div>
                <S.MemberBackNumber>등번호</S.MemberBackNumber>
                <S.MemberPosition>포지션</S.MemberPosition>
              </div>
            </S.MemberAttribute>
            {state.memberList.map((v, i) => {
              return <MemberContainer key={i} {...v} />;
            })}
          </S.MemberList>
        </S.MemberListContainer>
      </S.MainContainer>
    </>
  );
};

export default MemberManagement;
