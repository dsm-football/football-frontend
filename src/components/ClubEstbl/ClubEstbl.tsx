import React from 'react'
import * as S from "./style";
import { Header, PageMoveHeader } from '../common';

const ClubEstbl = () => {
    return(
        <>
            <Header />
            <PageMoveHeader />
            <S.ClubEstblItemWrapper>
                <S.InputTitle>동호회명</S.InputTitle>
                <div className="title-description">n자 이내로 작성해주세요.</div>
                <S.ClubEstblInput />
                <div className="title-error">이미 사용중인 이름입니다.</div>
                <S.InputTitle>동호회 한 줄 소개</S.InputTitle>
                <S.ClubEstblInput />
                <S.InputTitle>동호회 SNS</S.InputTitle>
                <div className="title-description">회원들과 연락할 수 있는 오픈카톡방이나 SNS주소를 입력해주세요.</div>
                <S.ClubEstblInput />
                <S.InputTitle>동호회장 SNS</S.InputTitle>
                <div className="title-description">회원들과 연락할 수 있는 오픈카톡방이나 SNS주소를 입력해주세요.</div>
                <S.ClubEstblInput />            
            </S.ClubEstblItemWrapper>
        </>
    )
}

export default ClubEstbl;