import React, { FC, Suspense, useEffect } from "react";
import { useParams } from "react-router";
import { MyPage } from "../../components";
import { Header } from "../../components/common";
import UseMyProfile from "../../util/hooks/myProfile";

const MyPageConatiner: FC = () => {
  const { state, setState } = UseMyProfile();
  const { id } = useParams() as any;

  useEffect(() => {
    setState.setId(id);
  }, [id]);

  useEffect(() => {
    setState.setMyProfile();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MyPage />
    </Suspense>
  );
};

export default MyPageConatiner;
