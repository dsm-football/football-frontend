import React, { useEffect, useState } from "react";
import {
  ClubEstbl,
  ClubEstblImage,
  ClubEstblCompletion,
} from "../../components";
const ClubEstblItem = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    setPage(1);
  }, [page]);
  switch (page) {
    case 1:
      return <ClubEstbl />;
    case 3:
      return <ClubEstblImage />;
    default:
      return <ClubEstblCompletion />;
  }
};

export default ClubEstblItem;
