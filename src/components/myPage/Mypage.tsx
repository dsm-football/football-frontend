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
                <S.Name>김수인</S.Name>
                <S.Evaluation>4.8 / 12회 / 3승</S.Evaluation>
                <S.Player>선수출신</S.Player>
                <S.Modify>수정하기</S.Modify>    
            </S.Div>
            <S.Div>
                <UserExplain />
            </S.Div>
        </>
    );
};

export default Mine;