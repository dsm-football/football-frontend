import React from 'react';
import * as S from './style';

const Calendar = () =>{

    const days = [
        {
            id: 1,
            day: '일',
            date: '5'
        },
        {
            id: 2,
            day: '월',
            date: '6'
        },
        {
            id: 3,
            day: '화',
            date: '7'
        },
        {
            id: 4,
            day: '수',
            date: '8'
        },
        {
            id: 5,
            day: '목',
            date: '9'
        },
        {
            id: 6,
            day: '금',
            date: '10'
        },
        {
            id: 7,
            day: '토',
            date: '11'
        }
    ];

    return(
        <>
        <S.Calendars>
            <S.Dates>
                {days.map((el) => (
                <div key={el.id}>
                    <S.Font>{el.day}</S.Font> <br />
                    {el.date}
                </div>
                ))}    
                </S.Dates>
        </S.Calendars>
        </>
    );
}




export default Calendar;