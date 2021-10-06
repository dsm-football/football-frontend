import React, { FC, Suspense } from "react";
import { Header, PageMoveHeader } from "../../components/common";
import SignupItem from "./SignupItem";

const SignupContainer: FC = () => {
  const value = {
    id: 0,
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <PageMoveHeader />
      <SignupItem {...value} />
    </Suspense>
  );
};

export default SignupContainer;
