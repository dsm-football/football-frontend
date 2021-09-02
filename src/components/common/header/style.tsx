import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #C4C4C4;
  justify-content: space-between;

  & div{
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.div`
  width: 70px;
  height: 40px;
  background-color: white;
  margin-left: 20px;
`

export const ListContainer = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  margin-right: 20px;
`

// pageMoveHeader

export const PageMoveHeaderWrapper = styled(HeaderWrapper)`
  height: 52px;
  background-color: #ECECEC;
  box-sizing: border-box;
  padding: 0 7%;
`;
export const BackPage = styled(ListContainer)`
  margin: 0;
  background-color:#FFCFCF;
`;
export const PageMoveTitle = styled.div`
  height: 25px;
  font-size: 18px;
  font-weight: 700;
`;

export const NextPage = styled(PageMoveTitle)`
  font-weight: 500;
`;