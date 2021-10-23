import React, { FC, Suspense } from "react";
import { Header, PageMoveHeader } from "../../components/common";
import SignupItem from "./SignupItem";
const SignupContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <PageMoveHeader header={"회원등록페이지"} />
      <SignupItem />
    </Suspense>
  );
};

export default SignupContainer;
