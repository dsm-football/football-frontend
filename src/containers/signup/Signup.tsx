import React, { FC, Suspense } from "react";
import { Header, PageMoveHeader } from "../../components/common";
import SignupItem from "./SignupItem";
const SignupContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <PageMoveHeader />
      <SignupItem />
    </Suspense>
  );
};

export default SignupContainer;
