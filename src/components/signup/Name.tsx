import React, { useState } from "react";
import * as S from "./style";
import { setPage, setUserName } from "../../modules/redux/action/signup";
import { useDispatch } from "react-redux";
const Name = () => {
  const dispatch = useDispatch();
  const [userName, setUsersName] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsersName(e.target.value);
  };
  const checkSpecial = (name: string) => {
    const pattern = /[`~!@#$%^&*|\\'";:/?]/gi;
    if (pattern.test(name) === true) {
      return true;
    }
    return false;
  };
  const dispatchName = () => {
    if (userName === "") {
      alert("이름을 입력해주세요");
    } else if (checkSpecial(userName)) {
      alert("특수문자를 삭제해주세요");
    } else {
      dispatch(setUserName(userName));
      dispatch(setPage(1));
    }
  };
  return (
    <>
      <S.InputSignupWrapper>
        <S.InputWrapper>
          <S.Input type="string" onChange={onChange} value={userName} />
          <span>실명을 입력하세요</span>
        </S.InputWrapper>
        <S.NextPage onClick={() => dispatchName()}>다음</S.NextPage>
      </S.InputSignupWrapper>
    </>
  );
};

export default Name;
