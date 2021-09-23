import React from "react";
import * as S from "./style";
import { Header, PageMoveHeader } from "../common";
import Select from "react-select";
const ageOptions = [
  { value: "전체", label: "전체" },
  { value: "10대", label: "10대~20대" },
  { value: "20대", label: "20대~30대" },
  { value: "30대", label: "30대~40대" },
  { value: "40대", label: "40대~50대" },
  { value: "50대", label: "50대~60대" },
  { value: "60대 이상", label: "60대 이상" },
];
const genderOptions = [
  { value: "남자", label: "남자" },
  { value: "여자", label: "여자" },
  { value: "혼성", label: "혼성" },
];

const ClubEstblAdditional = () => {
  return (
    <>
      <Header />
      <PageMoveHeader />
      <S.ClubEstblAdditionalWrapper>
        <S.InputTitle>동호회 지역</S.InputTitle>
        <S.ClubEstblInput />
        <S.InputTitle>동호회 정원</S.InputTitle>
        <S.ClubEstblInput />
        <S.InputTitle>시합 주기(선택)</S.InputTitle>
        <S.ClubEstblInput />
        <S.InputTitle>나이대 설정(선택)</S.InputTitle>
        <Select
          placeholder="전체"
          options={ageOptions}
          className="react-select-container"
          isSearchable={false}
          maxMenuHeight={100}
        />
        <S.InputTitle>성별 설정(선택)</S.InputTitle>
        <Select
          placeholder="남자"
          options={genderOptions}
          className="selectBox"
          isSearchable={false}
          maxMenuHeight={100}
        />
      </S.ClubEstblAdditionalWrapper>
    </>
  );
};

export default ClubEstblAdditional;
