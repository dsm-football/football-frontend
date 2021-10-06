import styled from "styled-components";

export const SignupWrapper = styled.div`
  width: 100vw;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & span {
    color: #c4c4c4;
    font-size: 14px;
  }
`;
export const InputSignupWrapper = styled(SignupWrapper)`
  box-sizing: border-box;
  padding-top: 80px;
  height: 510px;
  justify-content: space-between;
`;
export const CardWrapper = styled.div`
  width: 100vw;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
`;
export const BigCardWrapper = styled(CardWrapper)`
  height: 220px;
  margin: 0;
`;
export const SignupCard = styled.div`
  height: 95px;
  width: 195px;
  border-radius: 6px;
  background-color: #0bff0b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
`;
export const GenderCard = styled(SignupCard)`
  height: 140px;
`;
export const NextPage = styled(SignupCard)`
  width: 320px;
  height: 55px;
  font-size: 16px;
`;
export const Input = styled.input`
  width: 260px;
  border: none;
  border-bottom: 1px solid black;
  height: 50px;
  font-size: 30px;
  padding: 0 5px;
  margin-bottom: 10px;
  outline: none;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
`;
