import React, { FC, useEffect } from 'react';
import * as S from './style';

type UserType = {
        '구글 계정': string;
        '동호회 이름': string;
        '포지션': string;
        '지역': string;
        '나이': string;
        '나의 한줄 소개': string;
    };

type UserExplainProps = {
    user: UserType;
    isDisabled: boolean;
    modifier: React.ChangeEventHandler<HTMLInputElement>;
}

const UserExplain:FC<UserExplainProps> = ({ user, isDisabled ,modifier }) => {
    const arr1 = Object.keys(user);
    const arr2 = Object.values(user);
    
    return(
        <>
            <S.Divs>
                <S.Line>
                    {arr1.map((el, index) => (
                        <div key={index}>
                            {el}
                        </div>
                    ))}
                </S.Line>
                <S.Default>
                    {arr2.map((el, index) => (
                        <input
                            placeholder={arr1[index] + " 입력"}
                            onChange={modifier}
                            disabled={isDisabled}
                            key={index}
                            name={arr1[index]}
                        />
                    ))}
                </S.Default>
            </S.Divs> 
        </>
    );
}




export default UserExplain;