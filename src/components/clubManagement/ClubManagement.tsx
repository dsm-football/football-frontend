import React, { useState } from "react";
import { color } from "../../style";
import ClubInfo from "./clubInfo/ClubInfo";
import MatchManagement from "./matchManagement/MatchManagement";
import MemberManagement from "./memberManagement/MemberManagement";
import * as S from "./style";

const ManagementArray = ["매칭관리", "회원관리", "동호회정보"];

const ClubManagement = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <section>
        <S.ClubManageBanner>
          <b>동호회 관리</b>
        </S.ClubManageBanner>
        <S.ClubManageList page={page}>
          <ul>
            {ManagementArray.map((v, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {v}
                </li>
              );
            })}
          </ul>
        </S.ClubManageList>
        {page === 1 && <MatchManagement />}
        {page === 2 && <MemberManagement />}
        {page === 3 && <ClubInfo />}
      </section>
    </>
  );
};

export default ClubManagement;
