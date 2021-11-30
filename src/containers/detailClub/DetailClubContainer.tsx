import React, { FC, Suspense, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/common";
import DetailClub from "../../components/detailClub/DetailClub";
import UseClubInfo from "../../util/hooks/clubInfo";

const DetailClubContainer: FC = () => {
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
      <DetailClub />
    </Suspense>
  );
};

export default DetailClubContainer;
