import styled from "styled-components";

export const MatchingList = styled.div`
  width: 100%;
  position: relative;

  & h3 {
    font-size: 16px;
    margin: 20px;
  }
`;

export const MatchContainer = styled.div`
  border-bottom: 10px solid #f0f0f0;
`;

export const MatchingApplicationList = styled.div`
  width: 320px;
  height: 150px;
  overflow-y: scroll;
  margin: auto;
  margin-bottom: 17px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MatchSlideList = styled.div`
  width: 90%;
  height: 140px;
  margin: auto;
  margin-bottom: 20px;

  & div::-webkit-scrollbar {
    display: none;
  }
`;

export const MatchingApplicationNotice = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
