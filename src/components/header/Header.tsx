import React from 'react'
import * as S from './style';

const Header = () => {
  return(
    <>
      <S.HeaderWrapper>
        <S.Logo>로고 자리</S.Logo>
        <div>
          <S.LoginContainer>로그인</S.LoginContainer>
          <S.ListContainer />
        </div>
      </S.HeaderWrapper>
    </>
  );
}

export default Header;