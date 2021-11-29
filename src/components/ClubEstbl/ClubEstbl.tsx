import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setClubDiscription,
  setClubName,
  setPageIndex,
} from "../../modules/redux/action/clubEstbl";
import {
  ageOption,
  cycleOption,
  genderOption,
  peopleNumber,
} from "../../constance/option";
import * as S from "./style";

const ClubEstbl = () => {
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
    if (inputs.clubName === "" || inputs.clubIntroduce === "") {
      alert("모든 값을 입력해주세요.");
      return;
    }
    dispatch(setClubName(inputs.clubName));
    dispatch(setClubDiscription(inputs.clubIntroduce));
    dispatch(setPageIndex(2));
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
          <S.SelectBox>
            <div>
              <S.InputTitle>동호회 정원</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                {peopleNumber.map((people, i) => (
                  <option key={i}>{people}</option>
                ))}
              </S.Select>
            </div>
          </S.SelectBox>
          <S.SelectBox>
            <div>
              <S.InputTitle>시합 주기</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                {cycleOption.map((cycle, i) => (
                  <option key={i}>{cycle}</option>
                ))}
              </S.Select>
            </div>
          </S.SelectBox>
          <S.SelectBox>
            <div>
              <S.InputTitle>나이대 설정</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                {ageOption.map((age, i) => (
                  <option key={i}>{age}</option>
                ))}
              </S.Select>
            </div>
          </S.SelectBox>
          <S.SelectBox>
            <div>
              <S.InputTitle>성별 설정</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                {genderOption.map((gender, i) => (
                  <option key={i}>{gender}</option>
                ))}
              </S.Select>
            </div>
          </S.SelectBox>
        </S.SelectBoxWrapper>
        <S.NextPage onClick={onClick}>다음</S.NextPage>
      </S.ClubEstblItemWrapper>
    </>
  );
};

export default ClubEstbl;
