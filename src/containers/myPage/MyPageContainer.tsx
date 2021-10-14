import React, { FC, Suspense } from "react";
import { MyPage } from "../../components";
import { Header } from "../../components/common";

const MyPageConatiner: FC = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <MyPage />
      </Suspense>
    );
  };
  
  export default MyPageConatiner;