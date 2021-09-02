import React from 'react'
import * as S from './style'
const PageMoveHeader = () => {
    return(
        <S.PageMoveHeaderWrapper>
            <S.BackPage></S.BackPage>
            <S.PageMoveTitle>동호회 개설</S.PageMoveTitle>
            <S.NextPage>다음</S.NextPage>
        </S.PageMoveHeaderWrapper>
    )
}

export default PageMoveHeader;