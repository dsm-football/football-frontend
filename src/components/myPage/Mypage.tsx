import React, {useEffect, useState, ChangeEventHandler} from 'react'
import * as S from './style';
import Header from "../common/header/Header"
import UserExplain from './funciton';
import { MyPageToken } from '../../util/api/mypage';

const Mine = () => {
    useEffect(() =>{
       MyPageToken().then((res) => {
           console.log(res);
       }).catch((e) => {
           console.log(e);
       })
    }, [])

    const [isModifyMode, setIsModifyMode] = useState(false);

    const [form, setForm] = useState({
        '구글 계정': '',
        '동호회 이름': '',
        '포지션': '',
        '지역': '',
        '나이': '',
        '나의 한줄 소개': '',
    });

    const updateForm: ChangeEventHandler = (e) => {
        const $target = e.target as HTMLInputElement;
        setForm(prev => ({ ...prev, [$target.name]: $target.value }));
    }

    const Modify = () => {
        if (!isModifyMode) return setIsModifyMode(true);
        setIsModifyMode(false);
        console.log(form);
    }

    return(
        <>
            <Header />
            <S.Modify onClick={Modify}>{isModifyMode ? '수정완료' : '수정하기'}</S.Modify>
            <S.Div>
                <S.Profile></S.Profile>
                <div>
                    <S.Name>김수인</S.Name>
                    <S.Player>선수출신</S.Player>
                </div>
            </S.Div>
            <S.Div>
                <UserExplain user={form} modifier={updateForm} isDisabled={!isModifyMode}/>
            </S.Div>
        </>
    );
};

export default Mine;