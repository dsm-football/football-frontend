import React, {useEffect} from 'react'
import * as S from './style';
import Header from "../common/header/Header"
import UserExplain from './funciton';
import {MyPageToken} from '../../util/api/mypage';

const Mine = () => {
    useEffect(() =>{
       MyPageToken().then((res) => {
           console.log(res);
       }).catch((e) => {
           console.log(e);
       })
    })

    return(
        <>
            <Header />
            <S.Modify>수정하기</S.Modify>
            <S.Div>
                <S.Profile></S.Profile>
                <div>
                    <S.Name>김수인</S.Name>
                    <S.Evaluation>4.8 / 12회 / 3승</S.Evaluation>
                    <S.Player>선수출신</S.Player>
                </div>
            </S.Div>
            <S.Div>
                <UserExplain />
            </S.Div>
        </>
    );
};

export default Mine;