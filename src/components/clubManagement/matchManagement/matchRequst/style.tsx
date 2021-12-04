import styled from "styled-components";

export const ApplicationMatch = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  & span {
    font-family: "Noto Sans";
    width: 200px;
    height: 100%;
    font-size: 12px;
    margin-left: 12px;
  }

  & button {
    width: 60px;
    height: 25px;
    background-color: #c4c4c4;
    margin-left: 12px;
    border: none;
    font-size: 12px;
    border-radius: 3px;
  }
`;
