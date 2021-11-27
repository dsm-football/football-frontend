import React, { useEffect, useState } from "react";
import * as S from "./style";
import AppliedMember from "./appliedMember/AppliedMember";
import MemberContainer from "./memberContainer/MemberContainer";
import UseClubInfo from "../../../util/hooks/clubInfo";
import { getApplicationMember } from "../../../util/api/clubManagement";
import { useHistory } from "react-router";
import { ClubApplicationResponseType } from "../../../constance/clubInfo";

const MemberManagement = () => {
  const [applicationStatus, setApplicationStatus] = useState<boolean>(false);
  const [applicationMemberList, setApplicationMemberList] = useState<
    Array<ClubApplicationResponseType>
  >([]);
  const { state, setState } = UseClubInfo();
  const history = useHistory();

  useEffect(() => {
    getApplicationMember()
      .then((response) => {
        setApplicationMemberList(response.data || []);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("인증 오류");
          history.goBack();
        } else if (error.response?.status === 403) {
          alert("동호회 관리자가 아닙니다.");
          history.goBack();
        }
      });
  }, [state.id]);

  return (
    <>
      <S.MainContainer>
        <S.AllowSubscription>
          <span>동호회 가입 신청 받기</span>
          <S.SwitchContainer
            applicationStatus={!applicationStatus}
            onClick={() => {
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
              <S.AppliedMemberListNotice>가입을 요청한 회원이 없습니다.</S.AppliedMemberListNotice>
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
