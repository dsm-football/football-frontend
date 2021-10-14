import React from 'react';
import * as S from './style';

const UserExplain = () =>{
    const arr1 = ['구글 계정', '설명','동호회 이름', '포지션', 
                 '지역', '나이', '나의한줄소개'];
    
    const arr2 = ['ss@gamail.com', '김수인', '축구한판팀', '골키퍼', 
                  '서울시 노원구 하계동', '20', '슈퍼거미']

    return(
        <>
            <div className='App'>
                {arr1.map((el, index) => (
                    <div key={index}>
                        <S.Explain>{el}</S.Explain>
                    </div>
                ))}
            </div>
            <div className='App'>
                {arr2.map((el, index) => (
                    <div key={index}>
                        <S.Detail>{el}</S.Detail>
                    </div>
                ))}
            </div>
        </>
    );
}




export default UserExplain;