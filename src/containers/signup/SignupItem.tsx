import {
  Age,
  Athlete,
  Gender,
  Name,
  Position,
  Introduce,
} from "../../components";
import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerType } from "../../modules/redux/reducer";
import { setCode } from "../../modules/redux/action/signup";
import { useHistory } from "react-router";
interface pageIndexType {
  pageIndex?: number;
}
const SignupItem: FC = () => {
  const userInfo: pageIndexType = useSelector(
    (state: reducerType) => state.userSignupreducer
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (userInfo.pageIndex === 6) {
      postUserInfo();
      history.push("/");
    }
  });
  const postUserInfo = () => {
    const urlLink = decodeURI(window.location.href).substring(34);
    dispatch(setCode(urlLink));
    const obj = { ...userInfo };
    delete obj.pageIndex;
    console.log(obj);
    alert("회원가입 성공!");
  };
  switch (userInfo.pageIndex) {
    case 1:
      return <Age />;
    case 2:
      return <Gender />;
    case 3:
      return <Position />;
    case 4:
      return <Athlete />;
    case 5:
      return <Introduce></Introduce>;
    default:
      return <Name />;
  }
};

export default SignupItem;
