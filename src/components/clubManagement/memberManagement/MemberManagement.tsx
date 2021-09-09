import React, { useState } from "react";
import * as S from "./style";
import AppliedMember from "./appliedMember/AppliedMember";
import MemberTr from "./memberTr/MemberTr";

const MemberManagement = () => {
  const [applicationStatus, setApplicationStatus] = useState<boolean>(false);

  return (
    <>
      <S.MainContainer>
        <S.AllowSubscription>
          <span>동호회 가입 신청 받기</span>
          <S.SwitchContainer
            applicationStatus={applicationStatus}
            onClick={() => {
              setApplicationStatus(!applicationStatus);
            }}
          >
            <S.Switch applicationStatus={applicationStatus} />
          </S.SwitchContainer>
        </S.AllowSubscription>
        <S.AppliedMemberContainer>
          <b><span>가입을 요청한 회원</span></b>
          <S.AppliedMemberList>
            <AppliedMember />
            <AppliedMember />
          </S.AppliedMemberList>
        </S.AppliedMemberContainer>
        <S.MemberListContainer>
          <b><span>회원목록(20)</span></b>
          <S.MemberListTable>
            <S.MemberAttribute>
              <td>회원정보</td>
              <td>등번호</td>
              <td>포지션</td>
            </S.MemberAttribute>
            <MemberTr></MemberTr>
          </S.MemberListTable>
        </S.MemberListContainer>
      </S.MainContainer>
    </>
  );
};

export default MemberManagement;
