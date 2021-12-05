import React from 'react'
import * as S from './style';
import { areaOption, status, ageOption, genderOption } from '../../constance/option';


const Select = () => {
    return(
        <>
            <S.Options>
                <S.SelectBox>
                    <S.Defulat>지역</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        {areaOption.map((v: string, i: number) => {
                        return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                            );
                        })}
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                    <S.Defulat>상태</S.Defulat>
                    <S.Choice>
                        {status.map((v: string, i: number) => {
                            return (
                            <option key={i} value={v}>
                            {v}
                            </option>
                            );
                        })}
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                <S.Defulat>나이</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        {ageOption.map((v: string, i: number) => {
                            return (
                            <option key={i} value={v}>
                            {v}
                            </option>
                            );
                        })}
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                <S.Defulat>성별</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        {genderOption.map((v: string, i: number) => {
                        return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                            );
                        })}
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                <S.Defulat>승률</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                    </S.Choice>
                </S.SelectBox>
            </S.Options>
        </>
    );
};

export default Select;