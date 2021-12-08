import {
  Age,
  Athlete,
  Gender,
  Name,
  Position,
  Introduce,
  Area,
} from "../../components";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../../modules/redux/reducer";
import { useHistory } from "react-router";
import { postSignup } from "../../util/api/login";
import { setCode } from "../../modules/redux/action/signup";
interface pageIndexType {
  code: string;
  name: string;
  age: number;
  is_pro: boolean;
  bio: string;
  position_id: number;
  gender_id: number;
  area: string;
  pageIndex?: number;
}
const SignupItem: FC = () => {
  const dispatch = useDispatch();
  const userInfo: pageIndexType = useSelector(
    (state: reducerType) => state.userSignupreducer
  );
  const history = useHistory();
  useEffect(() => {
    if (userInfo.pageIndex === 7) {
      postUserInfo();
      history.push("/");
    }
  });
  function searchParam(key: string) {
    // eslint-disable-next-line no-restricted-globals
    return new URLSearchParams(location.search).get(key);
  }
  useEffect(() => {
    if (userInfo.pageIndex === 1) {
      const urlLink = searchParam("code");
      if (urlLink === "") {
        alert("잘못된 경로입니다.");
        history.push("/login");
      }
      if (urlLink !== null) {
        console.log(urlLink);
        dispatch(setCode(urlLink));
      }
    }
  }, [userInfo.pageIndex, dispatch, history]);
  const postUserInfo = () => {
    signupUserRequest(userInfo);
  };
  const signupUserRequest = (userInfo: pageIndexType) => {
    const signupData = { ...userInfo };
    delete signupData.pageIndex;
    console.log(signupData);
    const postSignUpapi = postSignup(signupData).then((res) => {
      localStorage.setItem("access-token", res.data["access_token"]);
    });
    console.log(postSignUpapi);
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
      return <Area />;
    case 6:
      return <Introduce></Introduce>;
    default:
      return <Name />;
  }
};

export default SignupItem;
