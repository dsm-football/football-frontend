import React, { FC, useState } from "react";
import * as S from "./style";
import { Bell, List, Logo } from "../../../assets";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";

const Header: FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  return (
    <>
      {sideBar && <Sidebar closeSideBar={setSideBar}/>}
      <S.HeaderWrapper>
        <Link to="/">
          <S.Logo src={Logo} />
        </Link>
        <div>
          <S.ListContainer src={Bell} />
          <S.ListContainer
            src={List}
            onClick={() => {
              setSideBar(true);
            }}
          />
        </div>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
