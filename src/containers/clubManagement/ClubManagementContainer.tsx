import React, { FC, Suspense } from "react";
import { ClubManagement } from "../../components";
import { Header } from "../../components/common";

const ClubManagementContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <ClubManagement />
    </Suspense>
  );
};

export default ClubManagementContainer;
