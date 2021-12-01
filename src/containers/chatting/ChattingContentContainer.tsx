import React, { Suspense } from "react";
import { ChattingContent } from "../../components";
import { Header } from "../../components/common";
const ChattingContentContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <ChattingContent />
    </Suspense>
  );
};

export default ChattingContentContainer;
