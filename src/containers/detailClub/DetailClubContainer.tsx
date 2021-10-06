import React, { FC, Suspense } from "react";
import { Header } from "../../components/common";
import DetailClub from "../../components/detailClub/DetailClub";

const DetailClubContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <DetailClub />
    </Suspense>
  );
};

export default DetailClubContainer;