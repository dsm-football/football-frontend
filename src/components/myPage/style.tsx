import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-around;
    &div{
        justify-content: center;
    }
`

export const Divs = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`


export const Profile = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #0BFF0B;
`

export const Modify = styled.button`
    width: 80px;
    height: 36px;
    border: 1px solid #C4C4C4;
    background-color: white;
    border-radius: 3px;
    float: right;
    margin: 10px;
    padding: 8px 14px;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
`

export const Name = styled.div`
    width: 60px;
    height: 25px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
`

export const Evaluation = styled.div`
    width: 95px;
    height: 16px;
    font-size: 12px;
    line-height: 16px;  
    display: flex;
`

export const Player = styled.div`
    width: 85px;
    height: 28px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
`

export const Line = styled.div`
    width: 45%;
    height: 60vh;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Default = styled(Line)`
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
`