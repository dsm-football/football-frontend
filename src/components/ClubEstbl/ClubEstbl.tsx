import React, { useState } from "react";
import { getClubNameRequest } from "../../util/api/ClubEstbl";
import * as S from "./style";

const ClubEstbl = () => {
  const [inputs, setInputs] = useState({
    clubName: "",
    clubIntroduce: "",
    clubSNS: "",
    clubHeadSNS: "",
  });
  const { clubName, clubIntroduce, clubSNS, clubHeadSNS } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onBlur = () => {};
  return (
    <>
      <S.ClubEstblItemWrapper>
        <S.InputTitle>동호회명</S.InputTitle>
        <div>
          <S.ClubEstblInput
            onBlur={onBlur}
            onChange={onChange}
            value={clubName}
            placeholder="15자 이내로 작성해주세요."
            name="clubName"
          />
          <div className="title-error">이미 사용중인 이름입니다.</div>
        </div>
        <S.InputTitle>동호회 한 줄 소개</S.InputTitle>
        <S.ClubEstblInput
          onChange={onChange}
          value={clubIntroduce}
          placeholder="동호회 한 줄 소개를 입력해주세요"
          name="clubIntroduce"
        />
        <S.InputTitle>동호회 SNS</S.InputTitle>
        <S.ClubEstblInput
          onChange={onChange}
          value={clubSNS}
          name="clubSNS"
          placeholder="회원들과 연락할 수 있는 오픈카톡방이나 SNS주소를 입력해주세요."
        />
        <S.InputTitle>동호회장 SNS</S.InputTitle>
        <S.ClubEstblInput
          onChange={onChange}
          value={clubHeadSNS}
          name="clubHeadSNS"
          placeholder="회원들과 연락할 수 있는 오픈카톡방이나 SNS주소를 입력해주세요."
        />
        <S.NextPage>다음</S.NextPage>
      </S.ClubEstblItemWrapper>
    </>
  );
};

export default ClubEstbl;
