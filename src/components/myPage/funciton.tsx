import React from 'react';
import * as S from './style';

const UserExplain = () =>{
    const arr1 = ['구글 계정', '설명','동호회 이름', '포지션', 
                 '지역', '나이', '나의한줄소개'];
    
    const arr2 = ['ss@gamail.com', '김수인', '축구한판팀', '골키퍼', 
                  '서울시 노원구 하계동', '20', '슈퍼거미']

    return(
        <>
            <S.Line>
                {arr1.map((el, index) => (
                    <div key={index}>
                        {el}
                    </div>
                ))}
            </S.Line>
            <S.Default>
                {arr2.map((el, index) => (
                    <div key={index}>
                        {el}
                    </div>
                ))}
            </S.Default>
        </>
    );
}




export default UserExplain;