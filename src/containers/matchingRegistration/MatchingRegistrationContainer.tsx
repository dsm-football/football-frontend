import React, { Suspense } from "react";
import { MatchingRegistration } from "../../components";
import { Header } from "../../components/common";

const MatchingRegistrationContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MatchingRegistration />
    </Suspense>
  );
};

export default MatchingRegistrationContainer;
