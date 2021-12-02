import React, { Suspense } from "react";
import { Header } from "../../components/common";
import { Chatting } from "../../components";

const ChattingContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Chatting />
    </Suspense>
  );
};

export default ChattingContainer;
