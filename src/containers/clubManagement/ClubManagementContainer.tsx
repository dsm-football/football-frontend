import React, { FC, Suspense, useEffect } from "react";
import { useParams } from "react-router";
import { ClubManagement } from "../../components";
import { Header } from "../../components/common";
import UseClubInfo from "../../util/hooks/clubInfo";

const ClubManagementContainer: FC = () => {
  const { state, setState } = UseClubInfo();
  const { id } = useParams() as any;

  useEffect(() => {
    setState.setId(id);
  }, [id]);

  useEffect(() => {
    setState.getMemberList();
    setState.getClubInfo();
  }, [state.id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <ClubManagement />
    </Suspense>
  );
};

export default ClubManagementContainer;
