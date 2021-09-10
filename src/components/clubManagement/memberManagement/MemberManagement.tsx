import React, { useState } from "react";
import * as S from "./style";
import AppliedMember from "./appliedMember/AppliedMember";
import MemberTr from "./memberTr/MemberTr";
import internal from "stream";

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
          <b>
            <span>가입을 요청한 회원</span>
          </b>
          <S.AppliedMemberList>
            {Array(3)
              .fill(0)
              .map((v, i) => {
                return <AppliedMember key={i} />;
              })}
          </S.AppliedMemberList>
        </S.AppliedMemberContainer>
        <S.MemberListContainer>
          <b>
            <span>회원목록(20)</span>
          </b>
          <S.MemberList>
            <S.MemberAttribute>
              <span>회원정보</span>
              <span>등번호</span>
              <span>포지션</span>
            </S.MemberAttribute>
            <MemberTr></MemberTr>
          </S.MemberList>
        </S.MemberListContainer>
      </S.MainContainer>
    </>
  );
};

export default MemberManagement;
