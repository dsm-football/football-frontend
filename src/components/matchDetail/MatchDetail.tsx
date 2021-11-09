import React from 'react'
import * as S from './style';
import Header from "../common/header/Header"
import Explain from '../matchDetail/function';

const Match = () => {
    return(
        <>
            <Header />
            <S.Back>
                <S.Div>
                    <S.Title>FC어쩌구팀과 경기해요!</S.Title>
                    <S.Rate>n위 00경기 00승 0무 00패</S.Rate>
                </S.Div>
                <S.Image />
            </S.Back>
            <S.Information>경기 정보</S.Information>
            <S.List>
                <Explain />
            </S.List>
            <S.Option>경기 옵션</S.Option>
            <S.OptionList>

            </S.OptionList>
        </>
    );
};

export default Match;