import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Google } from "../../assets";
import { getLoginLink } from "../../util/api/login";
const ClubEstbl = () => {
  const [link, setLink] = useState<any>();
  useEffect(() => {
    getLink();
  }, []);
  const getLink = async () => {
    const loginLink = await getLoginLink().then((res) => res?.data.link);
    setLink(loginLink);
  };
  return (
    <S.Container>
      <S.LoginHeader>로그인</S.LoginHeader>
      <S.LoginBox to={link}>
        <img src={Google} alt="" />
        <span>구글 계정으로 로그인</span>
      </S.LoginBox>
      <S.LoginExplanation>
        회원가입 없이 이용 가능하며 첫 로그인시
        <br />
        <span>'이용약관'</span>및<span>'개인정보처리방침'</span>동의로
        간주됩니다.
      </S.LoginExplanation>
    </S.Container>
  );
};

export default ClubEstbl;
