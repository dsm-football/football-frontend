import React, { useEffect, useState } from "react";
import * as S from "./style";
import Select from "./SelectBox";
import Header from "../common/header/Header";
import { getClubList } from "../../util/api/clubList";
import { Link, useHistory } from "react-router-dom";
import { ClubListResponseType } from "../../constance/clubList";
import Club from "./club/Club";

const List = () => {
  const history = useHistory();

  const [clubInfo, setClubInfo] = useState<Array<ClubListResponseType>>([]);

  useEffect(() => {
    getClubList(1, false, 1, 1)
      .then((res) => {
        setClubInfo(res.data);
      })
      .catch((e) => {
        alert("잠시 후 시도해주세요.");
        history.goBack();
      });
  }, []);

  return (
    <>
      <Header />
      <S.Title>동호회를 찾아보세요!</S.Title>
      <S.Divide />
      <S.Find>
        <S.All>전체 111</S.All>
        <S.Period>
          <option>최신순</option>
          <option>오래전순</option>
        </S.Period>
      </S.Find>
      <Select />
      <S.List>
        {clubInfo.map((v, i) => {
          return (
            <Link to={"/club/" + v.club_id}>
              <Club key={i} {...v} />
            </Link>
          );
        })}
      </S.List>
    </>
  );
};

export default List;
