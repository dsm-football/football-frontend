import React from 'react';
import * as S from './style';

const Ranks = () =>{
    const arr1 = ['1', 'Fc어쩌구저쩌구', '00', '00', '00', '0', '00', '00', '00'];
    
    return(
        <>
            <S.Ranks>
                {arr1.map((el, index) => (
                <div key={index}>
                    {el}
                </div>
                ))}    
            </S.Ranks>        
        </>
    );
}

export default Ranks;