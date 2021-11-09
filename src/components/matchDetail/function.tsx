import React from 'react';
import * as S from './style';

const Explain = () =>{
    const arr1 = ['경기날짜 : ', '경기시간 : ','매칭 마감일 : ', '매칭 경기 : ',
                  '팀 인원 : ', '장소 : ', '비용 : '];
    
    const arr2 = ['2021년 08월 23일', '미정', '2021년 08월 19일', '축구', '11명',
                  '서울 ㅇㅇ초등학교', '1인당 0000원']

    return(
        <>
            <S.Detail>
                {arr1.map((el, index) => (
                    <div key={index}>
                        {el}
                    </div>
                ))}
            </S.Detail>
            <S.Decide>
                {arr2.map((el, index) => (
                    <div key={index}>
                        {el}
                    </div>
                ))}
            </S.Decide>    
        </>
    );
}




export default Explain;