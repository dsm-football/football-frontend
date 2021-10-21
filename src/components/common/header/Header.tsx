import React from 'react'
import * as S from './style';
import { Bell, List, Logo } from '../../../assets';

const Header = () => {
  return(
    <>
      <S.HeaderWrapper>
        <S.Logo src={Logo} />
        <div>
          <S.ListContainer src={Bell} />
          <S.ListContainer src={List}/>
        </div>
      </S.HeaderWrapper>
    </>
  );
}

export default Header;