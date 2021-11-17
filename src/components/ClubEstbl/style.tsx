import styled from "styled-components";
export const ClubEstblItemWrapper = styled.div`
  width: 100%;
  height: 540px;
  padding: 4% 5.5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  .inputTitle {
    font-size: 16px;
    font-weight: 600;
  }
  .title-error {
    color: red;
    margin-top: 5px;
  }
`;
export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const ClubEstblInput = styled.input`
  width: 320px;
  height: 40px;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  ::placeholder {
    color: #c4c4c4;
  }
`;

// ClubEstblAdditional
export const ClubEstblAdditionalWrapper = styled(ClubEstblItemWrapper)`
  padding: 4% 0;
  align-items: center;
  justify-content: space-between;
`;
export const SelectBoxWrapper = styled.div`
  width: 100%;
`;
export const SelectBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  div {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Select = styled.select`
  border: none;
  font-size: 16px;
`;
// ClubEstblImage
export const ClubEstblImageWrapper = styled(ClubEstblItemWrapper)`
  height: 84vh;
  padding: 10px 5.5%;
  justify-content: space-between;
`;
export const ImageWrapper = styled.div`
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LogoImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BackgroundImageWrapper = styled(LogoImageWrapper)`
  width: 320px;
  height: 200px;
`;

//ClubEstblCompletion
export const ClubEstblCompletionWrapper = styled(ClubEstblItemWrapper)`
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  & span {
    margin-bottom: 30px;
  }
`;
export const ClubEstblCompletionLogo = styled(LogoImageWrapper)`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextPage = styled.div`
  width: 320px;
  height: 55px;
  font-size: 16px;
  border-radius: 6px;
  background-color: #0bff0b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
`;
export const CompletionPage = styled(NextPage)`
  position: relative;
  bottom: -125px;
`;
