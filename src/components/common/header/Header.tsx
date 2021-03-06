import React, { FC, useEffect, useState } from "react";
import * as S from "./style";
import { Bell, List, Logo } from "../../../assets";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import UseMyProfile from "../../../util/hooks/myProfile";
import { getUserId } from "../../../util/api/userId";

const Header: FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const { state, setState } = UseMyProfile();

  return (
    <>
      {sideBar && <Sidebar closeSideBar={setSideBar} />}
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
