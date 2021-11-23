import React from "react";
import { useSelector } from "react-redux";
import {
  ClubEstbl,
  ClubEstblImage,
  ClubEstblCompletion,
} from "../../components";
import { reducerType } from "../../modules/redux/reducer";

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
  const clubEstbl: ClubEstblType = useSelector(
    (state: reducerType) => state.clubEstblreducer
  );
  switch (clubEstbl.pageIndex) {
    case 2:
      return <ClubEstblImage />;
    case 3:
      return <ClubEstblCompletion />;
    default:
      return <ClubEstbl />;
  }
};

export default ClubEstblItem;
