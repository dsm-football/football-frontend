import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setClubDiscription,
  setClubName,
} from "../../modules/redux/action/clubEstbl";
import * as S from "./style";

const ClubEstbl = () => {
  const selectArr = [
    { title: "동호회 정원", value: ["100명"] },
    { title: "시합주기(선택)", value: "1주에 1번" },
    { title: "나이대 설정(선택)", value: "10대" },
    { title: "성별 설정(선택)", value: ["남성"] },
  ];
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    clubName: "",
    clubIntroduce: "",
  });
  const { clubName, clubIntroduce } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClick = () => {
    dispatch(setClubName(inputs.clubName));
    dispatch(setClubDiscription(inputs.clubIntroduce));
  };
  const onBlur = () => {};
  return (
    <>
      <S.ClubEstblItemWrapper>
        <S.InputTitle>동호회명</S.InputTitle>
        <div>
          <S.ClubEstblInput
            onChange={onChange}
            onBlur={onBlur}
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
        <S.SelectBoxWrapper>
          {selectArr.map((select, i) => (
            <S.SelectBox key={i}>
              <div>
                <S.InputTitle>{select.title}</S.InputTitle>
                <S.Select name="memberNum" id="memberNum">
                  <option>{select.value}</option>
                </S.Select>
              </div>
            </S.SelectBox>
          ))}
        </S.SelectBoxWrapper>
        <S.NextPage onClick={onClick}>다음</S.NextPage>
      </S.ClubEstblItemWrapper>
    </>
  );
};

export default ClubEstbl;
