import styled from "styled-components";
const mainColor = "#c4c4c4";
export const ClubEstblItemWrapper = styled.div`
  width: 100%;
  height: 540px;
  padding: 4% 4%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  .inputTitle {
    font-size: 16px;
    font-weight: 600;
  }
  .title-error {
    color: red;
  }
`;
export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const ClubEstblInput = styled.input`
  background-color: ${mainColor};
  width: 320px;
  height: 44px;
  border: none;
  font-size: 14px;
`;
export const ClubEstblInputDescription = styled.textarea`
  height: 95px;
  background-color: ${mainColor};
  width: 320px;
  border: none;
  font-size: 14px;
`;

// ClubEstblAdditional
export const ClubEstblAdditionalWrapper = styled(ClubEstblItemWrapper)`
  padding-bottom: 20%;
`;

// ClubEstblImage
export const ClubEstblImageWrapper = styled(ClubEstblItemWrapper)`
  height: 400px;
  padding: 10px 4%;
`;
export const LogoImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${mainColor};
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
    margin-bottom: 20px;
  }
`;
export const ClubEstblCompletionLogo = styled(LogoImageWrapper)`
  width: 200px;
  height: 200px;
  margin-bottom: 120px;
`;
