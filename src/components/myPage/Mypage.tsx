import React from 'react'
import * as S from './style';
import Header from "../common/header/Header"
import UserExplain from './funciton';

const Mine = () => {
    return(
        <>
            <Header />
            <S.Div>
                <S.Profile />
                <S.Modify>수정하기</S.Modify>
            </S.Div>
            <S.Div>
                <UserExplain />
            </S.Div>
        </>
    );
};

export default Mine;