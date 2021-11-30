import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  ClubEstbl,
  ClubEstblImage,
  ClubEstblCompletion,
} from "../../components";
import { reducerType } from "../../modules/redux/reducer";
import { postClubEstbl } from "../../util/api/ClubEstbl";

interface ClubEstblType {
  name: string;
  description: string;
  main_profile: string;
  sub_profile: string;
  area: string;
  cycle_code: number;
  gender_code: number;
  age_group_code: number;
  pageIndex?: number;
}
const ClubEstblItem = () => {
  const history = useHistory();
  const token = localStorage.getItem("access_token");
  const clubEstbl: ClubEstblType = useSelector(
    (state: reducerType) => state.clubEstblreducer
  );
  useEffect(() => {
    if (clubEstbl.pageIndex === 4) {
      clubEstblRequest(clubEstbl);
    }
  });

  const clubEstblRequest = (club: ClubEstblType) => {
    const clubInfo = { ...clubEstbl };
    delete clubInfo.pageIndex;
    console.log(clubInfo);
    postClubEstbl(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3bHNkbjU3OTNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNTEyMDkzMSwiZXhwIjoyNjM1MTI4MTMxfQ.ToHX5vZcvH5Z07utSYGr02mA2G9AlYow2deMG5DiR6s",
      clubInfo
    );
    history.push("/");
  };
  switch (clubEstbl.pageIndex) {
    case 2:
      return <ClubEstblImage />;
    case 3:
      return <ClubEstblCompletion />;
    case 4:
      return <ClubEstblCompletion />;
    default:
      return <ClubEstbl />;
  }
};

export default ClubEstblItem;
