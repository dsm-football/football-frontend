import React from 'react';
import * as S from './style';

const Explain = () =>{
    const arr1 = ['경기날짜 : 2021년 08월 23일', 
                  '경기시간 미정: ', '매칭 마감일 : 2021년 08월 19일', 
                  '매칭 경기 : 축구', '팀 인원 : 11명', '장소 : 서울 ㅇㅇ초등학교', 
                  '비용 : 1인당 0000원'];

    return(
        <>
            <S.Detail>
                {arr1.map((el, index) => (
                    <div key={index}>
                        {el}
                    </div>
                ))}
            </S.Detail>  
        </>
    );
}




export default Explain;