import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: #6A6A6A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const ChangeImgBtn = styled.button`
  width: 90%;
  height: 45px;
  background-color: #ACACAC;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 25px;
`

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #C4C4C4;
  transform: translateY(50%);
`