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
import { useSelector } from "react-redux";
import { reducerType } from "../../modules/redux/reducer";
import { useHistory } from "react-router";
import { postSignup } from "../../util/api/login";
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
