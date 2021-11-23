import React, { Suspense, useEffect } from "react";
import { MatchingRegistration } from "../../components";
import { Header } from "../../components/common";
import useMatchingRegistration from "../../util/hooks/matchingRegistration";

const MatchingRegistrationContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MatchingRegistration />
    </Suspense>
  );
};

export default MatchingRegistrationContainer;
