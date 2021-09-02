import React, { useState } from "react";
import * as S from "./style";

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
        <S.AppliedMember>
          <span>가입을 요청한 회원</span>
          
        </S.AppliedMember>
      </S.MainContainer>
    </>
  );
};

export default MemberManagement;
