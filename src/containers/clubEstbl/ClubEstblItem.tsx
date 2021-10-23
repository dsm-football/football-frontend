import React, { useEffect, useState } from "react";
import {
  ClubEstbl,
  ClubEstblAdditional,
  ClubEstblImage,
  ClubEstblCompletion,
} from "../../components";
const ClubEstblItem = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    setPage(1);
    console.log(page);
  }, [page]);
  switch (page) {
    case 1:
      return <ClubEstbl />;
    case 2:
      return <ClubEstblAdditional />;
    case 3:
      return <ClubEstblImage />;
    default:
      return <ClubEstblCompletion />;
  }
};

export default ClubEstblItem;
