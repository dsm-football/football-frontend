import React from "react";
import * as S from "./style";
import { Bell, List, Logo } from "../../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Link to="/">
          <S.Logo src={Logo} />
        </Link>
        <div>
          <S.ListContainer src={Bell} />
          <S.ListContainer src={List} />
        </div>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
