import React, { useEffect, useState } from "react";
import * as S from "./style";
import { setPage, setUserName } from "../../modules/redux/action/signup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postLogin } from "../../util/api/login";
const Name = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
  useEffect(() => {
    const urlLink = decodeURI(window.location.href).substring(34);
    if (urlLink === "") {
      alert("잘못된 경로입니다.");
      history.push("/login");
    }
    if (1) {
    }
  }, [history, dispatch]);
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
